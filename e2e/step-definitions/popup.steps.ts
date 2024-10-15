import { Given, When, Then } from '@wdio/cucumber-framework';

import ScreenFactory from '../screenobjects/factory/factory.screen.js';

const popupScreen = ScreenFactory.getPopupScreen();

Given(/^Se debería mostrar el modal con el título (.*)$/, async (tittle: string) => {
    // const popupScreen = ScreenFactory.getPopupScreen();

    await popupScreen.validateTittle(tittle);

})

Given(/^como mensaje (.*)$/, async (message: string) => {
    await popupScreen.validateMessage(message);

})
Given(/^como botón (.*)$/, async (btn: string) => {
    await popupScreen.validateButton(btn);

})
Given(/^como botones (.*) y (.*)$/, async (btn1: string, btn2: string) => {
    await popupScreen.validateButton(btn1);
    await popupScreen.validateButton(btn2);

})     
Given(/^al presionar el botón (.*) se debe volver al menú principal$/, async (button: string) => {

    await popupScreen.goPressButton(button);
})
Given(/^al presionar el botón (.*) se cierra el modal y se muestra la pantalla de ingreso de codigo OPT para continuar con la compra$/, async (btn1: string) => {

    await popupScreen.goPressButton(btn1);
})
Given(/^al presionar el botón (.*) se cierra el popup y se muestra la pantalla actual con los mismos datos$/, async (btn1: string) => {

    await popupScreen.goPressButton(btn1);
    // Falta validar los datos de la pantalla actual
})
Given(/^al presionar el botón (.*) se debe ir a la webview de Pacífico$/, async (btn1: string) => {

    await popupScreen.goPressButton(btn1);
    // Falta validar los datos de la web de pacifico
})
Given(/^al presionar el botón (.*) se abre el aplicativo de llamadas con el numero telefónico (.*)$/, async (btn1: string, phoneNumber: string) => {

    await popupScreen.goPressButton(btn1);
    // Falta validar el numero telefonico
})
Given(/^al presionar el botón (.*) se abre el aplicativo de whatsapp al chat (.*)$/, async (btn1: string, chatName: string) => {

    await popupScreen.goPressButton(btn1);
    // Falta validar el chat de whtsapp
})
