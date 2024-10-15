import InitialScreen from "../android/login/home/initial.screen.android.js";
import EnterYourPasswordScreen from "../android/login/login/enteryourpassword.screen.android.js";
import EnterYourYapeScreen from "../android/login/login/enteryouryape.screen.android.js";
import ValidateCodeScreen from "../android/login/login/validationotp/validatecode.screen.android.js";
import ValidateDeviceScreen from "../android/login/login/validationotp/validatedevice.screen.android.js";
import WelcomeYaperoScreen from "../android/mainmenu/menu/welcomeyapero.screen.android.js";
import MainMenuScreen from "../android/mainmenu/menu/mainmenu.screen.android.js";
import Popup from "../android/popup/popup.screen.android.js";
import ShareUbicationScreenAnd from "../android/login/login/shareubication.screen.android.js";
import AppConfig from "./app.config.js";
import fs from 'fs';
import { setValue, getValue } from "@wdio/shared-store-service";
import path from 'path';


// const { BeforeAll, AfterAll } = require('@cucumber/cucumber');
import { BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';

const login = async () => {
    const enterYourYapeScreen = new EnterYourYapeScreen();
    const enterYourPasswordScreen = new EnterYourPasswordScreen();
    const validateCodeScreen = new ValidateCodeScreen();
    const validateDeviceScreen = new ValidateDeviceScreen();
    const welcomeYaperoScreen = new WelcomeYaperoScreen();
    const shareUbicationScreenAnd = new ShareUbicationScreenAnd();

    let appConfig = new AppConfig(process.env.ENV || "stg");
    let username = appConfig.getUsersYape()[0].username;
    let password = appConfig.getUsersYape()[0].password;
    let phone = appConfig.getUsersYape()[0].phone;

    // Realizamos el flujo de login
    await enterYourYapeScreen.loginAccount(username);
    await enterYourPasswordScreen.enterPassword(password);
    await shareUbicationScreenAnd.activateUbicationMoreLater();
    await browser.pause(3000);
    await validateCodeScreen.validateOtp(phone);
    await browser.pause(3000);
    await validateDeviceScreen.validateOtpDevice(username);
    await welcomeYaperoScreen.closePromotion();

};

const getPathAndNameFile = async (scenario) => {

    const featureFilePath = scenario.gherkinDocument.uri; // Ruta completa del archivo .feature
    let featureFolder = path.dirname(featureFilePath).replace("e2e/features/","");

    // Obtener fecha y hora actual
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    // const minutes = String(now.getMinutes()).padStart(2, '0');
    // const seconds = String(now.getSeconds()).padStart(2, '0');
    // Formatear fecha y hora
    const timestamp = `${year}-${month}-${day}_${hours}`;
    // Obtener el nombre del escenario y reemplazar espacios y caracteres no válidos
    const scenarioName = scenario.pickle.name.replace(' :: ', ' ').replace(/ /g, '_');
    if (browser.isAndroid) {
        featureFolder = path.join("android", featureFolder);
    } else if (browser.isIOS) {
        featureFolder = path.join("ios", featureFolder);
    }

    // Crear el directorio de videos con la fecha, hora y la carpeta del feature
    const videoDir = path.join('./videos', featureFolder, timestamp);
    if (!fs.existsSync(videoDir)) {
        fs.mkdirSync(videoDir, { recursive: true });
    }

    // Definir el nombre completo del archivo de video
    const videoFileName = path.join(videoDir, `${scenarioName}.mp4`);
    return videoFileName;

};

BeforeAll(async function () {
    const initialScreen = new InitialScreen();
    const enterYourPasswordScreen = new EnterYourPasswordScreen();
    const mainMenuScreen = new MainMenuScreen();
    const popup = new Popup();

    let bundleId = "com.yape." + (process.env.ENV || "stg");
    await setValue("bundleId", bundleId);

    await driver.activateApp(bundleId);
    let existElement = await popup.existMessageStartedSessionInOtherDispositive();
    if (existElement) {
        await popup.goPressButton("INICIAR SESIÓN");
        await login();
    } else {

        existElement = await enterYourPasswordScreen.existPasswordScreen() || await mainMenuScreen.existSeeMore();
        if (!existElement) {

            // Este hook se ejecuta antes de todos los escenarios
            // Aquí puedes agregar el código de inicio de sesión
            await initialScreen.alreadyHaveAccount();
            await login();
        }
    }

});
After(async function (scenario) {

    const mainMenuScreen = new MainMenuScreen();

    // Detener la grabación de pantalla después de cada escenario
    const video = await driver.stopRecordingScreen();

    // Definir el nombre y la ruta del archivo de video, basado en el nombre del escenario
    // const scenarioName = scenario.pickle.name.replace(' :: ', ' ').replace(/ /g, '_');
    // const videoFileName = `./videos/and/${scenarioName}.mp4`;
    const videoFileName = await getPathAndNameFile(scenario);

    // Guardar el video en el sistema de archivos
    fs.writeFileSync(videoFileName, video, 'base64');
    console.log(`Video guardado en: ${videoFileName}`);
    // Este hook se ejecuta después de todos los escenarios
    // Aquí puedes agregar el código para cerrar la aplicación o limpiar recursos
    let env = (process.env.ENV || "stg");

    let bundleId = "com.yape." + env;
    let existElement = await mainMenuScreen.existSeeMore();
    if (!existElement) {
        await driver.terminateApp(bundleId);
        await driver.activateApp(bundleId);
    }
    // await driver.resetApp();
});
Before(async function (scenario) {
    const enterYourPasswordScreen = new EnterYourPasswordScreen();
    const welcomeYaperoScreen = new WelcomeYaperoScreen();
    const popup = new Popup();
    const shareUbicationScreenAnd = new ShareUbicationScreenAnd();


    // Iniciar la grabación de pantalla antes de cada escenario
    await driver.startRecordingScreen();
    // Este hook se ejecuta después de todos los escenarios
    // Aquí puedes agregar el código para cerrar la aplicación o limpiar recursos
    // await driver.closeApp();
    let appConfig = new AppConfig(process.env.ENV || "stg");
    let password = appConfig.getUsersYape()[0].password;
    let existElement = await enterYourPasswordScreen.existPasswordScreen();

    if (existElement) {
        existElement = await popup.existMessageStartedSessionInOtherDispositive();
        if (existElement) {
            await popup.goPressButton("INICIAR SESIÓN");
            await login();
        } else {


            await enterYourPasswordScreen.enterPassword(password);
            await shareUbicationScreenAnd.activateUbicationMoreLater();
            await welcomeYaperoScreen.closePromotion();
        }
    }
});

AfterAll(async function () {
    // Este hook se ejecuta después de todos los escenarios
    // Aquí puedes agregar el código para cerrar la aplicación o limpiar recursos
    // await driver.closeApp();
    let env = (process.env.ENV || "stg");

    let bundleId = "com.yape." + env;
    await driver.terminateApp(bundleId);
});

