import { Given, When, Then } from '@wdio/cucumber-framework';

import ScreenFactory from '../screenobjects/factory/factory.screen.js';
import randomHelper from '../screenobjects/support/random.helper.js';

const deepLinkInsurance = ScreenFactory.getDeepLinkScreen();

Given(/^utilizamos el deeplink (.*)$/, async (deepLink: string) => {

    // Crear la URL utilizando la variable
    await deepLinkInsurance.executeDeepLink(deepLink);

})

When(/^con el deeplink (.*) con numero de (.*)$/, async (deepLink: string, plate: string) => {
    plate = await randomHelper.getPlate(plate);
    let dynamicUrl = `${deepLink}?license_plate=${plate}`;
    await deepLinkInsurance.executeDeepLink(dynamicUrl);

})

