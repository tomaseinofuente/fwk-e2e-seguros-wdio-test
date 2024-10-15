import { IWinStateSOAT } from "../../../interfaces/insurance/soat/winstatesoat.screen.interface.js";
import { Constants } from "../../../support/constants.android.js";
import BaseScreenAnd from "../../commons/base.screen.android.js";

import { $ } from '@wdio/globals'

class WinStateSOATAnd extends BaseScreenAnd implements IWinStateSOAT{

    public get lblAmount() {
        return $("//android.view.View[contains(@content-desc,'sol')]");

    }

    public get btnGoHome() {
        return $(Constants.BTN_IR_INICIO_WINSTATE_SOAT);

    }

    public async goMainMenu() {
        // await this.verticalScrollIntoView(Constants.BTN_IR_INICIO_WINSTATE_SPT);
        await browser.pause(5000);
        await this.verticalScrollingToEnd();
        await browser.pause(2000);
        // await browser.pause(5000);
        await this.btnGoHome.click();
    }

    public async getAmount(amount?: string) {
        await this.waitForElement(`//android.view.View[contains(@content-desc,'sol')]`);
        const descAmount = await this.lblAmount.getAttribute('content-desc');
        return descAmount;
    }

    public async validateAmount(amountExpected?: string, amountReceived?: string, numDec?: string) {
        let amountReceivedLocal = (amountReceived != undefined ? amountReceived.replaceAll(" soles", "").replaceAll(" sol", "") : "");
        let amountExpectedLocal = (amountExpected != undefined ? amountExpected.replaceAll(" soles", "").replaceAll(" sol", "") : "");
        await expect(amountExpectedLocal).toEqual(amountReceivedLocal);
        let decimalsNum = 0;
        if (amountReceivedLocal.includes(".")) {
            let arrayAmount = amountReceivedLocal.split(".");
            decimalsNum = arrayAmount[1].length;
        }
        await expect(numDec).toEqual(decimalsNum.toString());
    }

}

export default WinStateSOATAnd;