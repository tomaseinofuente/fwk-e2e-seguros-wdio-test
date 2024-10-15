import { Constants } from "../../../support/constants.ios.js";
import redis from "../../../support/redis.helper.js";
import utils from "../../../support/utils.js";
import BaseScreenIOS from "../../commons/base.screen.ios.js";

import { $ } from '@wdio/globals'

class ConfirmOTPSOATIOS extends BaseScreenIOS {
    public get btnBack() {
        return $("~Atrás");
    }
    public get btnClose() {
        return $("~Cerrar");
    }

    public get txtValidationCode() {
        return $(Constants.TXT_CODIGO_VALIDACION);
    }
    public get btnReSendCode() {
        return $("//XCUIElementTypeStaticText[@value=', ']/following-sibling::XCUIElementTypeOther/XCUIElementTypeButton");
    }
    public get btnYapearSOAT() {
        return $(Constants.BTN_YAPEAR_SOAT_POR);
    }

    public async yapearSoatBy() {
        await browser.pause(3000);
        let existeElemento = await this.waitForElement(Constants.TXT_CODIGO_VALIDACION);
        let otp = (existeElemento ? await redis.readDataRedis("yapeappotp_INAPP:*", utils.getCurrentDateTime(), 1) : "");
        await this.txtValidationCode.setValue(otp);
        await this.btnYapearSOAT.click();
        await browser.pause(6000);
    }

    public async goBack() {

        await browser.pause(2000);
        await this.btnBack.click();
    }
    public async closeScreen() {

        await browser.pause(2000);
        await this.btnClose.click();
    }
    public async selectReSendCode() {

        await browser.pause(23000);
        await this.btnReSendCode.click();
        await browser.pause(3000);

    }
}

export default ConfirmOTPSOATIOS;

