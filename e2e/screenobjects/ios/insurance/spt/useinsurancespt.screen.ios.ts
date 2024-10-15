import { IUseInsuranceSPT } from "../../../interfaces/insurance/spt/useinsurancespt.screen.interface.js";

import { $ } from '@wdio/globals'
import BaseScreenIOS from "../../commons/base.screen.ios.js";

class UseInsuranceSPTIOS extends BaseScreenIOS implements IUseInsuranceSPT {

    public get btnGoToWhatsApp() {
        return $("//XCUIElementTypeButton[@name='Ir a WhatsApp']");
    }
    public get btnGoBack() {
        return $("//XCUIElementTypeButton[@name='Regresar']");
    }
   
    
}

export default UseInsuranceSPTIOS;
	


