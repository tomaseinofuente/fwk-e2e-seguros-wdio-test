import { IConfirmQuoteSPT } from "../../../interfaces/insurance/spt/confirmquotespt.screen.interface.js";
import { Constants } from "../../../support/constants.ios.js";
import BaseScreenIOS from "../../commons/base.screen.ios.js";

import { $ } from '@wdio/globals'

class ConfirmQuoteSPTIOS extends BaseScreenIOS implements IConfirmQuoteSPT {

    public get btnBackToWellcome() {
        return $(Constants.BTN_BACK_CONFIRM_QUOTE)

    }
    public get btnCloseConfirmQuote() {
        return $(Constants.BTN_CLOSE_CONFIRM_QUOTE)

    }
    public get lnkKnowMore() {
        return $(Constants.BTN_KNOW_MORE_CONFIRM_QUOTE)

    }
    // chkTerminosYCondiciones
    public get chkTermsAndConditions() {
        return $(Constants.CHK_TERMINOS_Y_CONDICIONES_COMPRA_SPT)

    }
    public get btnBuyInsurance() {
        return $(Constants.BTN_COMPRA_SPT)
    }

    public get lnkTermsAndConditions() {
        return $("~He leído y acepto los Términos y Condiciones  y la Política de Privacidad.");
    }
    public get lnkPrivacyPolicy() {
        return $("");
    }

    public async existButtonBuyinsurance() {
        let existElement = await this.waitForElement(Constants.BTN_COMPRA_SPT, 30000);
        await expect(existElement).toBe(true);
    }


    public async buyInsuranceSPT() {
        await browser.pause(3000);
        await this.chkTermsAndConditions.click();
        await this.btnBuyInsurance.click();
    }
    public async closeScreen() {
        await browser.pause(2000);
        await this.btnCloseConfirmQuote.click();
    }

    public async selectKnowMore() {
        await browser.pause(2000);
        await this.verticalScrollingToEnd();
        await this.lnkKnowMore.click();
        await browser.pause(6000);
    }
    public async selectTermsAndConditions(): Promise<void> {
        await browser.pause(2000);
        await this.verticalScrollingToEnd();
        await this.lnkTermsAndConditions.click();
        await browser.pause(6000);
        
    }
    public async selectPrivacyPolicy(): Promise<void> {
        await this.lnkKnowMore.click();
        await this.verticalScrollingToEnd();
        await this.lnkPrivacyPolicy.click();
        await browser.pause(6000);

    }
    public async goBack() {
        await browser.pause(2000);
        await this.btnBackToWellcome.click();
        await browser.pause(2000);

    }
}

export default ConfirmQuoteSPTIOS;