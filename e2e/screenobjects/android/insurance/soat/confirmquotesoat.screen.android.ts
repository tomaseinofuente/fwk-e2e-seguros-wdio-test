import { Constants } from "../../../support/constants.android.js";
import BaseScreenAnd from "../../commons/base.screen.android.js";

import { $ } from '@wdio/globals'

class ConfirmQuoteSOATAnd extends BaseScreenAnd {

    private get btnBack() {
        return $("//android.widget.TextView[@text='Compra tu SOAT por']/preceding-sibling::android.widget.Button");
    }
    private get btnClose() {
        return $("~Cerrar");
    }
    private get lnkNeedModifyData() {
        return $("//android.widget.TextView[@text='¿Necesitas modificar los datos?']/following-sibling::android.view.View");
    }
    private get chkTermsAndConditions() {
        return $(Constants.CHK_COMPRAR_TERMINOS_Y_CONDICIONES_SOAT);
    }
    public get lnkTermsAndConditions() {
        return $("//android.widget.TextView[@text='He leído y aceptado los Términos y condiciones de SOAT, Envío del Certificado Electrónico y Política de Privacidad.']");
    }
    public get lnkPrivacyPolicy() {
        return $("//android.widget.TextView[@text='He leído y aceptado los Términos y condiciones de SOAT, Envío del Certificado Electrónico y Política de Privacidad.']");
    }
    private get btnContinueBuyBy() {
        return $(Constants.BTN_COMPRAR_CONTINUAR_COMPRA_POR_SOAT);
    }
    private get lblAmountQuote() {
        return $(Constants.LBL_MONTO_COTIZADO_SOAT);
    }

    public async setTermsAndConditions() {
        await browser.pause(5000);
        await this.verticalScrollingToEnd();
        await browser.pause(2000);
        await this.chkTermsAndConditions.click();
    }
    public async pressContinueBuyBy() {
        await browser.pause(3000);
        await this.btnContinueBuyBy.click();
    }
    public async getAmountQuote(){
        await this.verticalScrollingToBegin();
        this.waitForElement(Constants.LBL_MONTO_COTIZADO_SOAT);
        let amountQuote = await this.lblAmountQuote.getText();
        //android.widget.TextView[@text="0.01"]
        return amountQuote;
    }
    public async goBack() {
        await browser.pause(3000);
        await this.btnBack.click();
    }
    public async closeScreen() {
        await browser.pause(3000);
        await this.btnClose.click();
    }
    public async selectNeedModifyData() {
        await browser.pause(3000);
        await this.lnkNeedModifyData.click();
        await browser.pause(2000);
    }
    public async selectTermsAndConditions() {
        await browser.pause(3000);
        await this.lnkTermsAndConditions.click();
        await browser.pause(6000);
    }
    public async selectPrivacyPolicy() {
        await browser.pause(3000);
        await this.lnkPrivacyPolicy.click();
        await browser.pause(6000);
    }
    

}

export default ConfirmQuoteSOATAnd;