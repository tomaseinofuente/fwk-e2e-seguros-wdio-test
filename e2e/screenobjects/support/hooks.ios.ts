import InitialScreen from "../ios/login/home/initial.screen.ios.js";
import EnterYourPasswordScreen from "../ios/login/login/enteryourpassword.screen.ios.js";
import EnterYourYapeScreen from "../ios/login/login/enteryouryape.screen.ios.js";
import ValidateCodeScreen from "../ios/login/login/validationotp/validatecode.screen.ios.js";
import ValidateDeviceScreen from "../ios/login/login/validationotp/validatedevice.screen.ios.js";
import WelcomeYaperoScreen from "../ios/mainmenu/menu/welcomeyapero.screen.ios.js";
import MainMenuScreen from "../ios/mainmenu/menu/mainmenu.screen.ios.js";
import Popup from "../ios/popup/popup.screen.ios.js";
import AppConfig from "./app.config.js";
import fs from 'fs';
import path from 'path';

// const { BeforeAll, AfterAll } = require('@cucumber/cucumber');
import { BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';
import ShareUbicationScreenIOS from "../ios/login/login/shareubication.screen.ios.js";

const login = async () => {
    const enterYourYapeScreen = new EnterYourYapeScreen();
    const enterYourPasswordScreen = new EnterYourPasswordScreen();
    const validateCodeScreen = new ValidateCodeScreen();
    const validateDeviceScreen = new ValidateDeviceScreen();
    const welcomeYaperoScreen = new WelcomeYaperoScreen();
    const shareUbicationScreenIOS = new ShareUbicationScreenIOS();

    let appConfig = new AppConfig(process.env.ENV || "stg");
    let username = appConfig.getUsersYape()[0].username;
    let password = appConfig.getUsersYape()[0].password;
    let phone = appConfig.getUsersYape()[0].phone;

    // Realizamos el flujo de login
    await enterYourYapeScreen.loginAccount(username);
    await enterYourPasswordScreen.enterPassword(password);
    await shareUbicationScreenIOS.activateUbicationMoreLater();
    await browser.pause(3000);
    await validateCodeScreen.validateOtp(phone);
    await browser.pause(3000);
    await validateDeviceScreen.validateOtpDevice(username);
    await welcomeYaperoScreen.closePromotion();

};
const getPathAndNameFile = async (scenario) => {

    const featureFilePath = scenario.gherkinDocument.uri; // Ruta completa del archivo .feature
    // Obtenemos el directorio del feature y reemplazamos la carpeta e2e7features por vacio
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

    let appConfig = new AppConfig(process.env.ENV || "stg");
    let bundleId = "com.yape." + (process.env.ENV || "stg");
    await driver.execute('mobile: activateApp', { bundleId });
    let existElement = await popup.existMessageStartedSessionInOtherDispositive();
    if (existElement) {
        await login();
    } else {

        let existElement = await enterYourPasswordScreen.existPasswordScreen() || await mainMenuScreen.existSeeMore();
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
    // const videoFileName = `./videos/ios/${scenarioName}.mp4`;
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
        await driver.execute('mobile: terminateApp', { bundleId });
        await driver.execute('mobile: activateApp', { bundleId });
    }
});
Before(async function (scenario) {
    const enterYourPasswordScreen = new EnterYourPasswordScreen();
    const welcomeYaperoScreen = new WelcomeYaperoScreen();
    const shareUbicationScreenIOS = new ShareUbicationScreenIOS();

    const popup = new Popup();

    // Iniciar la grabación de pantalla antes de cada escenario
    await driver.startRecordingScreen();
    // Este hook se ejecuta después de todos los escenarios
    // Aquí puedes agregar el código para cerrar la aplicación o limpiar recursos
    // await driver.closeApp();
    let existElement = await enterYourPasswordScreen.existPasswordScreen();
    console.log("Metodo Before");
    let appConfig = new AppConfig(process.env.ENV || "stg");
    let username = appConfig.getUsersYape()[0].username;
    let password = appConfig.getUsersYape()[0].password;
    let phone = appConfig.getUsersYape()[0].phone;
    if (existElement) {

        await enterYourPasswordScreen.enterPassword(password);
        await shareUbicationScreenIOS.activateUbicationMoreLater();
        await welcomeYaperoScreen.closePromotion();

        existElement = await popup.existMessageStartedSessionInOtherDispositive();
        if (existElement) {
            await login();
        }

    }


});
AfterAll(async function () {
    // Este hook se ejecuta después de todos los escenarios
    // Aquí puedes agregar el código para cerrar la aplicación o limpiar recursos
    // await driver.closeApp();
    let env = (process.env.ENV || "stg");

    let bundleId = "com.yape." + env;
    await driver.execute('mobile: terminateApp', { bundleId });

});
