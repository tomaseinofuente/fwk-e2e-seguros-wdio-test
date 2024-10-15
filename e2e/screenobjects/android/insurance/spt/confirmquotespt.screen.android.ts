import { IConfirmQuoteSPT } from "../../../interfaces/insurance/spt/confirmquotespt.screen.interface.js";
import { Constants } from "../../../support/constants.android.js";
import BaseScreenAnd from "../../commons/base.screen.android.js";

import { $ } from '@wdio/globals'

class ConfirmQuoteSPTAnd extends BaseScreenAnd implements IConfirmQuoteSPT {
    // chkTerminosYCondiciones
    public get chkTermsAndConditions() {
        return $(Constants.CHK_TERMINOS_Y_CONDICIONES_COMPRA_SPT)

    }
    public get btnBuyInsurance() {
        return $(Constants.BTN_COMPRA_SPT)
    }
    public get btnBackToWellcome() {
        return $("//android.widget.TextView[@text='Dinero más seguro']/preceding-sibling::android.widget.Button");
    }
    public get btnCloseConfirmQuote() {
        return $("~Cerrar");
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
    public get bnrRememberThat3(){
        return $("//android.widget.TextView[@text='El seguro no cubre la pérdida o robo de tu celular.']");
    }
    public get lnkTermsAndConditions() {
        return $("//android.widget.TextView[@text='He leído y acepto los Términos y Condiciones y la Política de Privacidad.']");
    }

    public get lnkPrivacyPolicy() {
        return $("//android.widget.TextView[@text='He leído y acepto los Términos y Condiciones y la Política de Privacidad.']");
    }

    public async existButtonBuyinsurance(){
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
    public async selectTermsAndConditions() {
        await browser.pause(2000);
        await this.verticalScrollingToEnd();
        await this.lnkTermsAndConditions.click();
        await browser.pause(6000);
    }
    public async selectPrivacyPolicy() {
        await browser.pause(2000);
        await this.verticalScrollingToEnd();
        await this.lnkTermsAndConditions.click();
        await browser.pause(6000);

    }
    public async goBack() {
        await browser.pause(2000);
        await this.btnBackToWellcome.click();
        await browser.pause(2000);

    }
}

export default ConfirmQuoteSPTAnd;