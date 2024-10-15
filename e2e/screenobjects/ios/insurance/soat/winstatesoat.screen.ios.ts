import { IWinStateSOAT } from "../../../interfaces/insurance/soat/winstatesoat.screen.interface.js";
import { Constants } from "../../../support/constants.ios.js";
import BaseScreenIOS from "../../commons/base.screen.ios.js";

import { $ } from '@wdio/globals'

class WinStateSOATIOS extends BaseScreenIOS implements IWinStateSOAT {

    public get btnGoHome() {
        return $(Constants.BTN_IR_AL_INICIO_WINSTATE_SOAT);

    }
    public get lblAmount() {
        return $("//XCUIElementTypeStaticText[contains(@name,'soles')]");

    }

    public async goMainMenu() {
        // await this.verticalScrollIntoView(Constants.BTN_IR_INICIO_WINSTATE_SPT);
        await browser.pause(5000);
        await this.verticalScrollingToEnd();
        await browser.pause(5000);
        await this.waitForElement(Constants.BTN_IR_AL_INICIO_WINSTATE_SOAT, 8000);
        await this.btnGoHome.click();
    }

    public async getAmount(amount?: string) {
        await this.waitForElement(`//XCUIElementTypeStaticText[contains(@name,'soles')]`);
        const descAmount = await this.lblAmount.getAttribute('label');
        return descAmount;
    }

    public async validateAmount(amountExpected?: string, amountReceived?: string, numDec?: string) {
        let amountReceivedLocal = (amountReceived != undefined ? amountReceived.replaceAll(" soles", "") : "");
        let amountExpectedLocal = (amountExpected != undefined ? amountExpected.replaceAll(" soles", "") : "");
        await expect(amountExpectedLocal).toEqual(amountReceivedLocal);
        let decimalsNum = 0;
        if (amountReceivedLocal.includes(".")) {
            let arrayAmount = amountReceivedLocal.split(".");
            decimalsNum = arrayAmount[1].length;
        }
        await expect(numDec).toEqual(decimalsNum.toString());
    }

}

export default WinStateSOATIOS;