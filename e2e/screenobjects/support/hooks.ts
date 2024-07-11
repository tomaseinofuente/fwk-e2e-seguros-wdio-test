import initialScreen from "../android/login/home/initial.screen.js";
import enteryourpasswordScreen from "../android/login/login/enteryourpassword.screen.js";
import enteryouryapeScreen from "../android/login/login/enteryouryape.screen.js";
import validatecodeScreen from "../android/login/login/validationotp/validatecode.screen.js";
import validatedeviceScreen from "../android/login/login/validationotp/validatedevice.screen.js";
import welcomeyaperoScreen from "../android/mainmenu/menu/welcomeyapero.screen.js";
import AppConfig from "./app.config.js";

// const { BeforeAll, AfterAll } = require('@cucumber/cucumber');
import { BeforeAll, AfterAll } from '@cucumber/cucumber';

BeforeAll(async function () {
    let appConfig = new AppConfig(process.env.ENV || "stg");
    let username = appConfig.getUsersYape()[0].username;
    let password = appConfig.getUsersYape()[0].password;
    let phone = appConfig.getUsersYape()[0].phone;
    
    // Este hook se ejecuta antes de todos los escenarios
    // Aquí puedes agregar el código de inicio de sesión
    await initialScreen.alreadyHaveAccount();
    await enteryouryapeScreen.loginAccount(username);
    await enteryourpasswordScreen.enterPassword(password);
    await browser.pause(3000);
    await validatecodeScreen.validateOtp(phone);
    await browser.pause(3000);
    await validatedeviceScreen.validateOtpDevice(username);
    await welcomeyaperoScreen.closePromotion();

});

AfterAll(async function () {
    // Este hook se ejecuta después de todos los escenarios
    // Aquí puedes agregar el código para cerrar la aplicación o limpiar recursos
    // await driver.closeApp();
});
