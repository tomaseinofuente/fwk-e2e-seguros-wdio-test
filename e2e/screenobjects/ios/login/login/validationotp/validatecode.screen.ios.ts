import { IValidationCodeScreen } from "../../../../interfaces/login/login/validationotp/validatecode.screen.interface.js";
import { Constants } from "../../../../support/constants.ios.js";
import redis from "../../../../support/redis.helper.js";
import BaseScreenIOS from "../../../commons/base.screen.ios.js";

import { $ } from '@wdio/globals'

class ValidationCodeScreenIOS extends BaseScreenIOS implements IValidationCodeScreen{
    public get txtOtp() {
        const selector = Constants.TXT_INGRESAR_OTP_PHONE;
        return $(selector)
    }

    public get lnkResendCode() {
        const selector = Constants.LNK_REENVIAR_CODIGO_PHONE;
        return $(selector)
    }
    // Por que no llega el codigo
    public get lnkWhyNotArriveCode() {
        const selector = Constants.LNK_PROQUE_NO_LLEGA_CODIGO_PHONE;
        return $(selector)
    }

    public get btnCodeValidate() {
        return $(Constants.BTN_VALIDAR_CODIGO_PHONE);
    }

    async validateOtp(phone: string): Promise<void> {

        let existeElemento = await this.waitForElement(Constants.BTN_VALIDAR_CODIGO_PHONE);
        if (existeElemento){

            let otp = await redis.readDataRedis("yapeappotp_login:*", phone, 1);
    
            await this.txtOtp.setValue(otp);
            await this.btnCodeValidate.click();
        }
    }

}

export default ValidationCodeScreenIOS;