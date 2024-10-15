import { IWellcomeSPT } from "../../../interfaces/insurance/spt/wellcomespt.screen.interface.js";
import { Constants } from "../../../support/constants.android.js";
import BaseScreenAnd from "../../commons/base.screen.android.js";

import { $ } from '@wdio/globals'

class WellcomeSPTAnd extends BaseScreenAnd implements IWellcomeSPT {

    public get btnContinue() {
        return $(Constants.BTN_CONTINUAR_COTIZACION_SPT);
    }
    public get btnCloseWellcomeScreen() {
        return $("~Cerrar");
    }

    public async selectContinue() {
        await browser.pause(3000);
        await this.btnContinue.click();
        await browser.pause(10000);
    }

    public async closeScreen() {
        await browser.pause(2000);
        await this.btnCloseWellcomeScreen.click();
    }

    public async validateElementsInScreen() {
        await browser.pause(2000);
        let existElement = await this.waitForElement(Constants.BTN_CONTINUAR_COTIZACION_SPT, 10000);
        await expect(existElement).toBe(true);

    }


}

export default WellcomeSPTAnd;



