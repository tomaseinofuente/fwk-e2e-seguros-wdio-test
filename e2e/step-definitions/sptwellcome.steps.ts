import { Given, When, Then } from '@wdio/cucumber-framework';
import ScreenFactory from '../screenobjects/factory/factory.screen.js';

const wellcomeSPTScreen = ScreenFactory.getWellcomeSPTScreen();
Given(/^el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón continuar$/, async () => {

    await wellcomeSPTScreen.selectContinue();

})
Given(/^el usuario visualiza la pantalla de bienvenida de SPT y presiona el botón X$/, async () => {

    await wellcomeSPTScreen.closeScreen();

})
Given(/^el usuario visualiza la pantalla de bienvenida de SPT$/, async () => {

    await wellcomeSPTScreen.validateElementsInScreen();

})

