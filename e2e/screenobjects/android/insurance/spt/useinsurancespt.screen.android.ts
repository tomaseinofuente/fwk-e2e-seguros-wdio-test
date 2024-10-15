import { IUseInsuranceSPT } from "../../../interfaces/insurance/spt/useinsurancespt.screen.interface.js";
import BaseScreenAnd from "../../commons/base.screen.android.js";

import { $ } from '@wdio/globals'

class UseInsuranceSPTAnd extends BaseScreenAnd implements IUseInsuranceSPT {

    public get lblTitle() {
        return $("//android.widget.TextView[@text='Vamos a WhatsApp']");
    }
    public get lblDescription() {
        return $("//android.widget.TextView[@text='Uno de nuestros asesores te ayudará.']");
    }
    public get btnGoToWhatsApp() {
        return $("~Ir a whatsapp");
    }
    public get btnGoBack() {
        return $("~Regresar");
    }
   
    
}

export default UseInsuranceSPTAnd;
	


