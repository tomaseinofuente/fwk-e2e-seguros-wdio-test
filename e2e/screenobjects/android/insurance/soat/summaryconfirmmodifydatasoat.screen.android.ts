
import { $ } from '@wdio/globals'
import BaseScreenAnd from "../../commons/base.screen.android.js";
import ISummaryConfirmModifyDataSOAT from '../../../interfaces/insurance/soat/summaryconfirmmodifydatasoat.screen.android.js';

class SummaryConfirmModifyDataSOATAnd extends BaseScreenAnd implements ISummaryConfirmModifyDataSOAT {

    public get btnComeBack() {
        return $("~Regresar");
    }
    public get btnRequestAdvice() {
        return $("~Solicitar asesoría");
    }
    
    public async selectComeBack(){
        await this.waitForElement("~Regresar");
        await this.btnComeBack.click();
    }
    public async selectRequestAdvice(){
        await this.waitForElement("~Solicitar asesoría");
        await this.btnRequestAdvice.click();
    }
   
    
}

export default SummaryConfirmModifyDataSOATAnd;
	


