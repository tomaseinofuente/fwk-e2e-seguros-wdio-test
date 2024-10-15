import { Given, When, Then } from '@wdio/cucumber-framework';
import ScreenFactory from '../screenobjects/factory/factory.screen.js';

Given(/^el usuario debería visualizar el winstate de cancelación del seguro SPT y vuelve al menú principal$/, async () => {
    const winStateCancellationSPTcreen = ScreenFactory.getWinStateCancellationSPTScreen();

    await winStateCancellationSPTcreen.goMainMenu();

})