import { Given, When, Then } from '@wdio/cucumber-framework';
import ScreenFactory from '../screenobjects/factory/factory.screen.js';

// Given(/^el usuario visualiza menu principal$/, async () => {
//     await mainmenuScreen.setActualActivity("com.yape.stg", "com.yape.activity.MainActivity");

// })
const mainmenuScreen = ScreenFactory.getMainMenuScreen();
Given(/^el usuario en el menú selecciona el boton "Ver mas"$/, async () => {
    

    await mainmenuScreen.seeMore();
})

Then(`Se debería mostrar el menú principal de yape`, async () => {
    await mainmenuScreen.validateSeeMainMenu();
});