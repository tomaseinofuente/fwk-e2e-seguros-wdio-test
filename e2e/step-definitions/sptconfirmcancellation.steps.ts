import { Given, When, Then } from '@wdio/cucumber-framework';
import ScreenFactory from '../screenobjects/factory/factory.screen.js';

const confirmcancellationSPTScreen = ScreenFactory.getConfirmCancellationSPTScreen();
Given(/^el usuario visualiza la pantalla de confirmación de cancelación SPT$/, async () => {


})
Given(/^el usuario presiona el botón confirmar cancelación SPT$/, async () => {

   await confirmcancellationSPTScreen.selectConfirmCancellation();

})
