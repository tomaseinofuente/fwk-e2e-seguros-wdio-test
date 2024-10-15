import { Given, When, Then } from '@wdio/cucumber-framework';
import ScreenFactory from '../screenobjects/factory/factory.screen.js';

const menuInsuranceScreen = ScreenFactory.getMenuInsuranceScreen();
Given(/^el usuario visualiza el menú de seguros y selecciona (.*)$/, async (optInsurance: string) => {

    await menuInsuranceScreen.selectSaferMoney(optInsurance);

})

When(`el usuario en la pantalla de mundo seguros presiona el botón <-`, async () => {
    await menuInsuranceScreen.goBack();

});

When(`el usuario visualiza el menú de seguros`, async () => {
    await menuInsuranceScreen.validateElementsScreen();

});
