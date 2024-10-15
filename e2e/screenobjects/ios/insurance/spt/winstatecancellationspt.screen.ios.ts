import { IWinStateCancellationSPT } from "../../../interfaces/insurance/spt/winstatecacellationspt.screen.interface.js";
import BaseScreenIOS from "../../commons/base.screen.ios.js";

import { $ } from '@wdio/globals'

class WinStateCancellationSPTIOS extends BaseScreenIOS implements IWinStateCancellationSPT{
    public get btnClose(){
        return $("~Cerrar");
    }
    public get btnGoHome() {
        return $("~ic house");

    }

    public async goMainMenu() {
        // await this.verticalScrollIntoView(Constants.BTN_IR_INICIO_WINSTATE_SPT);
        await browser.pause(5000);
        await this.verticalScrollingToEnd();
        await browser.pause(5000);
        await this.btnGoHome.click();
    }

}

export default WinStateCancellationSPTIOS;