import { Given, When, Then } from '@wdio/cucumber-framework';
import ScreenFactory from '../screenobjects/factory/factory.screen.js';

const contractedinsurancesptScreen = ScreenFactory.getContractedInsuranceSPTScreen();
Given(/^el usuario visualiza la pantalla de Detalles de tu seguro$/, async () => {
   await contractedinsurancesptScreen.validateElementsScreen();

})

Given(/^el usuario presiona el botón Cancelar seguro$/, async () => {

   await contractedinsurancesptScreen.cancellateInsurance();

})

