import { IWinStateSPT } from "../../../interfaces/insurance/spt/winstatespt.screen.interface.js";
import { Constants } from "../../../support/constants.ios.js";
import BaseScreenIOS from "../../commons/base.screen.ios.js";

import { $ } from '@wdio/globals'

class WinStateSPTIOS extends BaseScreenIOS implements IWinStateSPT{

    public get btnGoHome() {
        return $(Constants.BTN_IR_INICIO_WINSTATE_SPT)

    }

    public async goMainMenu() {
        // await this.verticalScrollIntoView(Constants.BTN_IR_INICIO_WINSTATE_SPT);
        await browser.pause(5000);
        await this.verticalScrollingToEnd();
        await browser.pause(5000);
        await this.btnGoHome.click();
    }

}

export default WinStateSPTIOS;