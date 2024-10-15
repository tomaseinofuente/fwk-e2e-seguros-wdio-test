import { IWellcomeSPT } from "../../../interfaces/insurance/spt/wellcomespt.screen.interface.js";
import { Constants } from "../../../support/constants.ios.js";
import BaseScreenIOS from "../../commons/base.screen.ios.js";

import { $ } from '@wdio/globals'

class WellcomeSPTIOS extends BaseScreenIOS implements IWellcomeSPT{

    public get btnClose() {
        return $(Constants.BTN_CLOSE_RESULT_QUOTE_SPT);
    }
    public get btnContinue() {
        return $(Constants.BTN_CONTINUAR_COTIZACION_SPT);
    }

    public async selectContinue() {
        await browser.pause(3000);
        await this.btnContinue.click();
        await browser.pause(10000);

    }
    public async closeScreen() {
        await browser.pause(2000);
        await this.btnClose.click();
    }
    public async validateElementsInScreen() {
        await browser.pause(2000);
        let existElement = await this.waitForElement(Constants.BTN_CONTINUAR_COTIZACION_SPT, 10000);
        await expect(existElement).toBe(true);

    }

}

export default WellcomeSPTIOS;
	


