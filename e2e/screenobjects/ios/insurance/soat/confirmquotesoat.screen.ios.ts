import { IConfirmQuoteSOAT } from "../../../interfaces/insurance/soat/confirmquotesoat.screen.interface.js";
import { Constants } from "../../../support/constants.ios.js";
import BaseScreenIOS from "../../commons/base.screen.ios.js";

import { $ } from '@wdio/globals'

class ConfirmQuoteSOATIOS extends BaseScreenIOS implements IConfirmQuoteSOAT {


    public get btnBack() {
        return $("~Atrás");
    }
    public get btnClose() {
        return $("~Cerrar");
    }
    public get lnkNeedModifyData() {
        return $("//XCUIElementTypeStaticText[@name='¿Necesitas modificar los datos?']/following-sibling::XCUIElementTypeStaticText");
    }
    public get chkTermsAndConditions() {
        return $(Constants.CHK_TERMINOS_Y_CONDICIONES);
    }
    public get lnkTermsAndConditions() {
        return $("~Términos y condiciones de SOAT, Envío del Certificado Electrónico");
    }
    public get lnkPrivacyPolicy() {
        return $("~Política de Privacidad.");
    }
    public get btnContinueBuyBy() {
        return $(Constants.BTN_CONTINUAR_COMPRA_POR);
    }
    private get lblAmountQuote() {
        return $("//XCUIElementTypeStaticText[contains(@name,'soles')]");
    }

    public async setTermsAndConditions() {
        await browser.pause(5000);
        await this.chkTermsAndConditions.click();
    }
    public async pressContinueBuyBy() {
        await browser.pause(5000);
        await this.btnContinueBuyBy.click();
    }
    // TODO.
    public async getAmountQuote(): Promise<string> {
        await this.verticalScrollingToBegin();
        await this.waitForElement("//XCUIElementTypeStaticText[contains(@name,'soles')]");
        let amountQuote = await (await this.lblAmountQuote).getAttribute("label");
        console.log("getAmountQuote");
        console.log(amountQuote);
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
        await browser.pause(6000);
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

export default ConfirmQuoteSOATIOS;