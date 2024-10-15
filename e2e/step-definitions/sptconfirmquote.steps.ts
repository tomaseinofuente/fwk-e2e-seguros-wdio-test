import { Given, When, Then } from '@wdio/cucumber-framework';
import ScreenFactory from '../screenobjects/factory/factory.screen.js';

const confirmquotesptScreen = ScreenFactory.getConfirmQuoteSPTScreen();

Given(/^el usuario visualiza la cotización del seguro$/, async () => {
    await confirmquotesptScreen.existButtonBuyinsurance();

})
Given(/^el usuario presiona el botón comprar el seguro$/, async () => {
    await confirmquotesptScreen.buyInsuranceSPT();

})
Given(/^el usuario visualiza la pantalla de cotización de SPT y presiona el botón X$/, async () => {
    await confirmquotesptScreen.closeScreen();

})
Given(/^el usuario visualiza la pantalla de cotización y presiona el botón Conoce más$/, async () => {
    await confirmquotesptScreen.selectKnowMore();

})
Given(/^el usuario visualiza la pantalla de cotización de SPT y presiona el botón politica de privacidad$/, async () => {
    await confirmquotesptScreen.selectPrivacyPolicy();

})
Given(/^el usuario visualiza la pantalla de cotización de SPT y presiona el botón Terminos y Condiciones$/, async () => {
    await confirmquotesptScreen.selectTermsAndConditions();

})
Given(/^el usuario visualiza la pantalla de cotización de SPT y presiona el botón <-$/, async () => {
    await confirmquotesptScreen.goBack();

})
