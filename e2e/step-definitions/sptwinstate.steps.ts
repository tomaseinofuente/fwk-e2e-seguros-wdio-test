import { Given, When, Then } from '@wdio/cucumber-framework';
import ScreenFactory from '../screenobjects/factory/factory.screen.js';

Given(/^el usuario debería visualizar el winstate con los datos del seguro SPT comprado y vuelve al menú principal$/, async () => {
    const winstatesptScreen = ScreenFactory.getWinStateSPTScreen();

    await winstatesptScreen.goMainMenu();

})