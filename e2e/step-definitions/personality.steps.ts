import { Given, When, Then } from '@wdio/cucumber-framework';

import changePersonalityApi from '../apis/changepersonalityapi.js';


Given(/^establecemos el personality (.*)$/, async (personality: string) => {
    await changePersonalityApi.changePersonalityYape(personality);

})

