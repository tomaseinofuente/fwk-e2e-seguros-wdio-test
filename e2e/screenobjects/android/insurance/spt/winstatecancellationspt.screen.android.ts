import { IWinStateCancellationSPT } from "../../../interfaces/insurance/spt/winstatecacellationspt.screen.interface.js";
import BaseScreenAnd from "../../commons/base.screen.android.js";

import { $ } from '@wdio/globals'

class WinStateCancellationSPTAnd extends BaseScreenAnd implements IWinStateCancellationSPT{
    public get btnClose(){
        return $("//android.widget.Button");
    }
    public get btnGoHome() {
        return $("//android.widget.TextView[@text='Ir a inicio']/preceding-sibling::android.view.View");

    }

    public async goMainMenu() {
        // await this.verticalScrollIntoView(Constants.BTN_IR_INICIO_WINSTATE_SPT);
        await browser.pause(5000);
        await this.verticalScrollingToEnd();
        await browser.pause(5000);
        await this.btnGoHome.click();
    }

}

export default WinStateCancellationSPTAnd;