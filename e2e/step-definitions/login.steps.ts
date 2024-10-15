import { Given, When, Then } from '@wdio/cucumber-framework';
import ScreenFactory from '../screenobjects/factory/factory.screen.js';

Given(/^el usuario está registrado en Yape y presiona el boton "Ya tengo una cuenta"$/, async () => {
    const initialScreen = ScreenFactory.getInitialScreen();

    await browser.pause(5000)
    await initialScreen.alreadyHaveAccount();
})

Given(/^el usuario ingresa su (.*) y (.*)$/, async (username: string, password: string) => {
    const enteryouryapeScreen = ScreenFactory.getEnterYourYapeScreen();
    const enteryourpasswordScreen = ScreenFactory.getEnterYourPasswordScreen();

    await enteryouryapeScreen.loginAccount(username);
    await enteryourpasswordScreen.enterPassword(password);
    await browser.pause(3000);
})
Given(/^el usuario ingresa su código OTP, que le llega al (.*)$/, async (phone: string) => {
    const validatecodeScreen = ScreenFactory.getValidateCodeScreen();

    await validatecodeScreen.validateOtp(phone);
    await browser.pause(3000);
})

Given(/^el usuario ingresa su código OTP de dispositivo, si se le solicita al (.*)$/, async (username: string) => {
    const validatedeviceScreen = ScreenFactory.getValidateDeviceScreen();

    await validatedeviceScreen.validateOtpDevice(username);
})

Given(/^cierra el popup de bienvenida siempre y cuando se muestre$/, async () => {
    const welcomeyaperoScreen = ScreenFactory.getWellcomeYaperoScreen();

    await welcomeyaperoScreen.closePromotion();
})