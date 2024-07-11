import { Constants } from "../../../support/constants.js";
import BaseScreen from "../../commons/base.screen.js";

import { $ } from '@wdio/globals'

class WinStateSPT extends BaseScreen {

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

export default new WinStateSPT();