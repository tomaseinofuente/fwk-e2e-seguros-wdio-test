import { IConfirmCancellationSPT } from "../../../interfaces/insurance/spt/confirmcancellationspt.screen.interface.js";

import { $ } from '@wdio/globals'
import BaseScreenIOS from "../../commons/base.screen.ios.js";

class ConfirmCancellationSPTIOS extends BaseScreenIOS implements IConfirmCancellationSPT {

    public get btnConfirmCancellation() {
        return $("//XCUIElementTypeButton[@name='Confirmar cancelación']");
    }
    public get btnGoBack() {
        return $("//XCUIElementTypeButton[@name='Regresar']");
    }

    public async selectConfirmCancellation(){
        await this.waitForElement("//XCUIElementTypeButton[@name='Confirmar cancelación']", 10000);
        await this.btnConfirmCancellation.click();
    }
    public async selectGoBack(){
        await this.waitForElement("//XCUIElementTypeButton[@name='Regresar']");
        await this.btnGoBack.click();
    }
   
    
}

export default ConfirmCancellationSPTIOS;
	


