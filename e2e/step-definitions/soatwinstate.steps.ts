import { Given, When, Then } from '@wdio/cucumber-framework';
import { setValue, getValue } from "@wdio/shared-store-service";
import ScreenFactory from '../screenobjects/factory/factory.screen.js';

const winstatesoatScreen = ScreenFactory.getWinStateSOATScreen();

Given(/^se visualiza el winstate y se debe visualizar el monto con (.*) decimales$/, async (numDec: string) => {
    let amountExpected = await getValue("amountQuoteSOAT");
    // amountQuote = (amountQuote != undefined ? amountQuote : "");
    let amountReceived = await winstatesoatScreen.getAmount(amountExpected?.toString());

    await winstatesoatScreen.validateAmount(amountExpected?.toString(), amountReceived, numDec);
    
    

})
Given(/^el usuario debería visualizar el winstate con los datos del seguro SOAT comprado y vuelve al menú principal$/, async () => {
    await winstatesoatScreen.goMainMenu();

})

