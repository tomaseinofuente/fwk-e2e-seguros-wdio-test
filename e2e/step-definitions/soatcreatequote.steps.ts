import { Given, When, Then } from '@wdio/cucumber-framework';

import ScreenFactory from '../screenobjects/factory/factory.screen.js';

const createquotesoatScreen = ScreenFactory.getCreateQuoteSOATScreen();


Given(/^el usuario visualiza la pantalla de cotización de SOAT y presiona el botón <-$/, async () => {
    await createquotesoatScreen.goBack();

})
Given(/^el usuario visualiza la pantalla de cotización de SOAT y presiona el botón con ícono de auriculares$/, async () => {
    await createquotesoatScreen.goHelpSoat();

})
Given(/^el usuario ingresa la placa (.*)$/, async (plate: string) => {
    await createquotesoatScreen.enterNumberPlate(plate);

})
Given(/^el usuario presiona el botón COTIZAR$/, async () => {
    await createquotesoatScreen.pressQuote();

})
Given(/^el usuario visualiza la pantalla de cotización de SOAT$/, async () => {
    await createquotesoatScreen.validateElementsScreen();

})
