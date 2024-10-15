import { Given, When, Then } from '@wdio/cucumber-framework';
import ScreenFactory from '../screenobjects/factory/factory.screen.js';

// Given(/^el usuario visualiza menu principal$/, async () => {
//     await mainmenuScreen.setActualActivity("com.yape.stg", "com.yape.activity.MainActivity");

// })
Given(/^el usuario selecciona el boton Seguros$/, async () => {
    const mainsubmenuScreen = ScreenFactory.getMainSubMenuScreen();

    await mainsubmenuScreen.selectInsurance();

})

Given(/^el usuario selecciona el boton SOAT$/, async () => {
    const mainsubmenuScreen = ScreenFactory.getMainSubMenuScreen();

    await mainsubmenuScreen.selectSOAT();
})

