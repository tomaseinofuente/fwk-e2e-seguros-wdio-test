import { IConfirmCancellationSPT } from "../../../interfaces/insurance/spt/confirmcancellationspt.screen.interface.js";
import BaseScreenAnd from "../../commons/base.screen.android.js";

import { $ } from '@wdio/globals'

class ConfirmCancellationSPTAnd extends BaseScreenAnd implements IConfirmCancellationSPT {

    public get lblTitle() {
        return $("//android.widget.TextView[@text='Estás a punto de cancelar tu seguro']");
    }
    public get lblDescription() {
        return $("//android.widget.TextView[@text='Recuerda que con este seguro te cubrimos hasta S/ 3,500 ante robo o fraude.']");
    }
    public get btnConfirmCancellation() {
        return $("~Confirmar cancelación");
    }
    public get btnGoBack() {
        return $("~Regresar");
    }

    public async selectConfirmCancellation(){
        await this.waitForElement("~Confirmar cancelación", 10000);
        await this.btnConfirmCancellation.click();
    }
    public async selectGoBack(){
        await this.waitForElement("~Regresar", 10000);
        await this.btnGoBack.click();
    }
   
    
}

export default ConfirmCancellationSPTAnd;
	


