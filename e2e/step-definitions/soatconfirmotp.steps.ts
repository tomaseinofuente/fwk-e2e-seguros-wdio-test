import { Given, When, Then } from '@wdio/cucumber-framework';
import ScreenFactory from '../screenobjects/factory/factory.screen.js';

const confirmotpsoatScreen = ScreenFactory.getConfirmOTPSOATScreen();
Given(/^Se muestra la pantalla de verificación de OTP se ingresa el código OTP y se presiona el botón YAPEAR SOAT POR$/, async () => {

    await confirmotpsoatScreen.yapearSoatBy();

})
Given(/^el usuario visualiza la pantalla de verificación de OTP de SOAT y presiona el botón X$/, async () => {

    await confirmotpsoatScreen.closeScreen();

})
Given(/^el usuario visualiza la pantalla de verificación de OTP de SOAT y presiona el botón <-$/, async () => {

    await confirmotpsoatScreen.goBack();

})
Given(/^el usuario visualiza la pantalla de verificación de OTP de SOAT y presiona el botón Reenviar código$/, async () => {

    await confirmotpsoatScreen.selectReSendCode();

})
