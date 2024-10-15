import ISummaryConfirmModifyDataSOAT from "../../../interfaces/insurance/soat/summaryconfirmmodifydatasoat.screen.android.js";
import BaseScreenIOS from "../../../ios/commons/base.screen.ios.js";

import { $ } from '@wdio/globals'

class SummaryConfirmModifyDataSOATIOS extends BaseScreenIOS implements ISummaryConfirmModifyDataSOAT {

    public get btnComeBack() {
        return $("//XCUIElementTypeStaticText[@name='Para actualizar los datos, puedes hacerlo a través del call center de Pacífico Seguros']/following-sibling::XCUIElementTypeButton[1]");
    }
    public get btnRequestAdvice() {
        return $("//XCUIElementTypeStaticText[@name='Para actualizar los datos, puedes hacerlo a través del call center de Pacífico Seguros']/following-sibling::XCUIElementTypeButton[2]");
    }
    
    public async selectComeBack(){
        await this.waitForElement("//XCUIElementTypeStaticText[@name='Para actualizar los datos, puedes hacerlo a través del call center de Pacífico Seguros']/following-sibling::XCUIElementTypeButton[1]");
        await this.btnComeBack.click();
    }
    public async selectRequestAdvice(){
        await this.waitForElement("//XCUIElementTypeStaticText[@name='Para actualizar los datos, puedes hacerlo a través del call center de Pacífico Seguros']/following-sibling::XCUIElementTypeButton[2]");
        await this.btnRequestAdvice.click();
    }
   
    
}

export default SummaryConfirmModifyDataSOATIOS;
	


