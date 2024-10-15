import { Constants } from "../../../support/constants.android.js";
import redis from "../../../support/redis.helper.js";
import utils from "../../../support/utils.js";


import { $ } from '@wdio/globals'
import BaseScreenAnd from "../../commons/base.screen.android.js";

class ConfirmOTPSOATAnd extends BaseScreenAnd {
    public get btnBack() {
        return $("//android.widget.TextView[@text='SOAT']/preceding-sibling::android.widget.Button");
    }
    public get btnClose() {
        return $("~Cerrar");
    }
    public get txtValidationCode() {
        return $(Constants.TXT_OTP_CODIGO_DE_VALIDACION_SOAT);
    }
    public get btnReSendCode() {
        return $(Constants.BTN_OTP_REENVIAR_CODIGO_SOAT);
    }
    public get btnYapearSOAT() {
        return $(Constants.BTN_OTP_YAPEAR_SOAT_POR_SOAT);
    }

    public async yapearSoatBy() {
        // await browser.pause(3000);
        await this.verticalScrollingToEnd();
        let existeElemento = await this.waitForElement(Constants.TXT_OTP_CODIGO_DE_VALIDACION_SOAT, 3000);
        if (existeElemento){
            let txtValidationCode = await this.txtValidationCode.getText();
            if (txtValidationCode.trim() == ""){

                let otp = await redis.readDataRedis("yapeappotp_INAPP:*", utils.getCurrentDateTime(), 2);
                await this.txtValidationCode.setValue(otp);
            }
        }
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

export default ConfirmOTPSOATAnd;