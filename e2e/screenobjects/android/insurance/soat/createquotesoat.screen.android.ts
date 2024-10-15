import { Constants } from "../../../support/constants.android.js";
import RandomHelper from "../../../support/random.helper.js";

import { $ } from '@wdio/globals'
import BaseScreenAnd from "../../commons/base.screen.android.js";
import { ICreateQuoteSOAT } from "../../../interfaces/insurance/soat/createquotesoat.screen.interface.js";

class CreateQuoteSOATAnd extends BaseScreenAnd implements ICreateQuoteSOAT {
    // btnDineroMasSeguro
    public get txtNumberPlate() {
        return $(Constants.TXT_NRO_PLACA_SOAT);
    }
    public get btnQuote() {
        return $(Constants.BTN_COTIZAR_SOAT);
    }
    public get btnBack() {
        return $("//android.view.View[@content-desc='Ayuda']/ancestor::android.view.View/preceding-sibling::android.widget.Button");
    }
    public get btnHelp() {
        return $("//android.view.View[@content-desc='Ayuda']");
    }

    public async enterNumberPlate(plate: string) {
        plate = RandomHelper.getPlate(plate);
        await browser.pause(3000);
        plate = plate.replaceAll('\"', '');
        await this.txtNumberPlate.setValue(plate);

    }
    public async pressQuote() {
        await browser.pause(3000);
        await this.btnQuote.click();
    }

    private async getElementHistoricalSOATS(status: string): Promise<string> {
        let element: string = "";
        let elementExist: boolean = false;
        for (let i = 0; i < 3; i++) {
            let elements = await $$("//android.widget.ScrollView/android.view.View[2]//android.view.View");
            for (let j = 0; j < elements.length; j++) {
                element = `//android.widget.ScrollView/android.view.View[2]//android.view.View[${j}]//android.widget.TextView[contains(@text, ${status})]`;
                elementExist = await this.waitForElement(element, 2000);
                if (elementExist) {
                    break;
                }
            }
            if (elementExist)
                break;
            await this.verticalScrollingToEnd();
        }
        await expect(elementExist).toBe(true);
        return element;
        //android.widget.ScrollView/android.view.View[2]//android.view.View[2]//android.widget.TextView[contains(@text, "Comprado")]
    }

    public async selectPlateHistorical(status: string) {
        let plate = $(await this.getElementHistoricalSOATS(status));
        await plate.click();
    }

    public async goBack() {
        await this.btnBack.click();
    }
    public async goHelpSoat() {
        await this.btnHelp.click();
    }
    public async validateElementsScreen() {
        await this.verticalScrollingToBegin();
        let elementExist = await this.waitForElement(Constants.BTN_COTIZAR_SOAT);
        await expect(elementExist).toBe(true);

    }
}

export default CreateQuoteSOATAnd;