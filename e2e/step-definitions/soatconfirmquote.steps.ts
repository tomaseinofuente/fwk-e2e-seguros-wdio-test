import { Given, When, Then } from '@wdio/cucumber-framework';
import { setValue, getValue } from "@wdio/shared-store-service";
import ScreenFactory from '../screenobjects/factory/factory.screen.js';

const confirmquotesoatScreen = ScreenFactory.getConfirmQuoteSOATScreen();

Given(/^se muestra la cotización con los datos del vehículo$/, async () => {
    // debemos validar los datos del vehiculo

    let amountQuote = await confirmquotesoatScreen.getAmountQuote();
    await setValue("amountQuoteSOAT", amountQuote);

})

Given(/^se acepta los terminos y condiciones y se presiona el botón CONTINUAR COMPRA POR$/, async () => {
    await confirmquotesoatScreen.setTermsAndConditions();
    
    await confirmquotesoatScreen.pressContinueBuyBy();

})

Given(/^el usuario visualiza la pantalla de compra tu SOAT y presiona el botón X$/, async () => {
    await confirmquotesoatScreen.closeScreen();

})
Given(/^el usuario visualiza la pantalla de compra tu SOAT y presiona el botón <-$/, async () => {
    await confirmquotesoatScreen.goBack();

})
Given(/^el usuario visualiza la pantalla de compra tu SOAT y presiona el botón Necesitas modificar los datos$/, async () => {
    await confirmquotesoatScreen.selectNeedModifyData();

})
Given(/^el usuario visualiza la pantalla de cotización de SOAT y presiona el botón Terminos y Condiciones$/, async () => {
    await confirmquotesoatScreen.selectTermsAndConditions();

})
Given(/^el usuario visualiza la pantalla de cotización de SOAT y presiona el botón politica de privacidad$/, async () => {
    await confirmquotesoatScreen.selectPrivacyPolicy();

})