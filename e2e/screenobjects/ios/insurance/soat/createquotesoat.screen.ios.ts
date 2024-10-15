import { Constants } from "../../../support/constants.ios.js";
import RandomHelper from "../../../support/random.helper.js";

import { $ } from '@wdio/globals'
import BaseScreenIOS from "../../commons/base.screen.ios.js";
import { ICreateQuoteSOAT } from "../../../interfaces/insurance/soat/createquotesoat.screen.interface.js";

class CreateQuoteSOATIOS extends BaseScreenIOS implements ICreateQuoteSOAT {
    // btnDineroMasSeguro
    public get txtNumberPlate() {
        return $(Constants.TXT_NRO_PLACA);
    }
    public get btnQuote() {
        return $(Constants.BTN_COTIZAR);
    }
    public get btnBack() {
        return $("~Atrás");
    }
    public get btnHelp() {
        return $("~ic_headset_r_yape");
    }

    public async enterNumberPlate(plate:string){
        plate = RandomHelper.getPlate(plate);
        await browser.pause(3000);
        plate = plate.replaceAll('\"', '');
        await this.txtNumberPlate.setValue(plate);
        
    }
    public async pressQuote() {
        await browser.pause(3000);
        await this.btnQuote.click();
    }
    // TODO:
    private async getElementHistoricalSOATS(status: string): Promise<string> {
        let element: string = "";
        let elementExist: boolean = false;
        for (let i = 0; i < 3; i++) {
            let elements = await $$("//XCUIElementTypeTable/XCUIElementTypeCell");
            for (let j = 0; j < elements.length; j++) {
                element = `//XCUIElementTypeTable/XCUIElementTypeCell[${j}]`;
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
    }
    public async selectPlateHistorical(status: string): Promise<void> {
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
        let elementExist = await this.waitForElement(Constants.BTN_COTIZAR);
        await expect(elementExist).toBe(true);

    }
}

export default CreateQuoteSOATIOS;