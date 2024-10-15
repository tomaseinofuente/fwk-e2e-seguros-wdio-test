import BaseScreenAnd from "../../commons/base.screen.android.js";

import { $ } from '@wdio/globals'

class MenuInsuranceAnd extends BaseScreenAnd {
    // btnDineroMasSeguro
    private getBtnMenuInsurance(optInsurance: string) {
        // optInsurance = optInsurance.replaceAll("\"", "");
        return $(`//android.widget.TextView[contains(@text, ${optInsurance})]`);
    }
    //btnBack
    private get getBtnBackMenuInsurance() {
        return $('//android.widget.Button');
    }

    public async selectSaferMoney(optInsurance: string) {
        await browser.pause(3000);
        await this.getBtnMenuInsurance(optInsurance).click();
    }

    public async goBack() {
        await browser.pause(2000);
        await this.getBtnBackMenuInsurance.click();
    }
    public async validateElementsScreen() {
        // await browser.pause(2000);
        let existElement = await this.waitForElement(`//android.widget.TextView[contains(@text, 'Dinero más seguro')]`, 10000);
        await expect(existElement).toEqual(true);
    }

    
}

export default MenuInsuranceAnd;