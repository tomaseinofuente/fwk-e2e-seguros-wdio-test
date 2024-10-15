import BaseScreenIOS from "../../commons/base.screen.ios.js";

import { $ } from '@wdio/globals'

class MenuInsuranceIOS extends BaseScreenIOS {
   
    private get getBtnBackMenuInsurance() {
        // optInsurance = optInsurance.replaceAll("\"", "");
        return $(`~Atrás`); 
    }
    private getBtnMenuInsurance(optInsurance: string) {
        // optInsurance = optInsurance.replaceAll("\"", "");
        return $(`//XCUIElementTypeStaticText[contains(@value, ${optInsurance})]`); 
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
        let existElement = await this.waitForElement(`//XCUIElementTypeStaticText[contains(@value, 'Dinero más seguro')]`, 10000);
        await expect(existElement).toEqual(true);
    }
}

export default MenuInsuranceIOS;