import { IContractedInsuranceSPT } from "../../../interfaces/insurance/spt/contractedinsurancespt.screen.interface.js";
import BaseScreenAnd from "../../commons/base.screen.android.js";

import { $ } from '@wdio/globals'

class ContractedInsuranceSPTAnd extends BaseScreenAnd implements IContractedInsuranceSPT{

    public get btnBack() {
        return $("//android.widget.TextView[@text='Dinero más seguro']/preceding-sibling::android.widget.Button");
    }
    public get btnClose() {
        return $("~Cerrar");
    }
    public get lblYourYapeAlreadyHasExtraProtection() {
        return $("~Tu Yape ya tiene extra protección");
    }
    public get lnkKnowMore() {
        return $("//android.widget.TextView[@text='Conoce más']");
    }
    public get bnrRememberThat1(){
        return $("//android.widget.TextView[@text='El cobro de tu seguro se hará de forma automática a tu Yape, cada mes.']");
    }
    public get bnrRememberThat2(){
        return $("//android.widget.TextView[@text='El seguro no cubre la pérdida o robo de tu celular.']");
    }
    
    public get btnUseInsurance() {
        return $("~Utilizar seguro");
    }
    public get btnCancelInsurance() {
        return $("//android.widget.TextView[@text='CANCELAR SEGURO']");
    }
    
    public async cancellateInsurance(){
        await browser.pause(6000);
        await this.verticalScrollingToEnd();
        await browser.pause(3000);
        await this.btnCancelInsurance.click();
    }

    public async validateElementsScreen(){
        await this.verticalScrollingToBegin();
        let existElement = await this.waitForElement("~Tu Yape ya tiene extra protección", 20000);
        await expect(existElement).toEqual(true);
    }
}

export default ContractedInsuranceSPTAnd;
	


