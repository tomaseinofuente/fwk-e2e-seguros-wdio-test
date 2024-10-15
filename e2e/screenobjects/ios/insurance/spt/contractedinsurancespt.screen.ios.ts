import { IContractedInsuranceSPT } from "../../../interfaces/insurance/spt/contractedinsurancespt.screen.interface.js";

import { $ } from '@wdio/globals'
import BaseScreenIOS from "../../commons/base.screen.ios.js";

class ContractedInsuranceSPTIOS extends BaseScreenIOS implements IContractedInsuranceSPT{

    public get btnBack() {
        return $("~Atrás");
    }
    public get btnClose() {
        return $("~Cerrar");
    }
    public get lblYourYapeAlreadyHasExtraProtection() {
        return $("~Tu Yape ya tiene extra protección");
    }
    
    public get lnkKnowMore() {
        return $("//XCUIElementTypeButton[@name='Conoce más']");
    }
    public get bnrRememberThat1(){
        return $("~El cobro de tu seguro se hará de forma automática a tu Yape, cada mes.");
    }
    public get bnrRememberThat2(){
        return $("~El seguro no cubre la pérdida o robo de tu celular.");
    }

    public get btnUseInsurance() {
        return $("//XCUIElementTypeButton[@name='Utilizar seguro']");
    }
    public get btnCancelInsurance() {
        return $("//XCUIElementTypeButton[@name='Cancelar seguro']");
    }
    
    public async cancellateInsurance(){
        await browser.pause(6000);
        await this.verticalScrollingToEnd();
        await browser.pause(3000);
        await this.btnCancelInsurance.click();
    }
    public async validateElementsScreen(){
        await this.verticalScrollingToBegin()
        let existElement = await this.waitForElement("~Tu Yape ya tiene extra protección", 20000);
        await expect(existElement).toEqual(true);
    }
}

export default ContractedInsuranceSPTIOS;
	


