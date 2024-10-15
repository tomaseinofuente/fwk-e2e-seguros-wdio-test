import { Given, When, Then } from '@wdio/cucumber-framework';
import { setValue, getValue } from "@wdio/shared-store-service";
import ScreenFactory from '../screenobjects/factory/factory.screen.js';

const confirmQuoteModifyDataSOATScreen = ScreenFactory.getConfirmQuoteModifyDataSOATScreen();

Given(/^Se debería mostrar el popup Modificar datos$/, async () => {
    
    await confirmQuoteModifyDataSOATScreen.validateElementsScreen();
})
Given(/^el usuario en el popup Modificar datos presiona el botón regresar$/, async () => {
    
    await confirmQuoteModifyDataSOATScreen.goBack();
})
Given(/^el usuario en el popup Modificar datos presiona el botón Ir a la web de pacífico$/, async () => {
    
    await confirmQuoteModifyDataSOATScreen.goGoToWebPacifico();
})

