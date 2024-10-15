import { IValidationDeviceScreen } from "../../../../interfaces/login/login/validationotp/validatedevice.screen.interface.js";
import { Constants } from "../../../../support/constants.ios.js";
import redis from "../../../../support/redis.helper.js";
import BaseScreenIOS from "../../../commons/base.screen.ios.js";

import { $ } from '@wdio/globals'

class ValidationDeviceScreenIOS extends BaseScreenIOS implements IValidationDeviceScreen {
    private get txtCodeValidation() {
        const selector = Constants.TXT_INGRESAR_OTP_DISPOSITIVO;

        return $(selector)
    }

    private get lnkResendCode() {
        const selector = Constants.LNK_REENVIAR_CODIGO_DISPOSITIVO
        return $(selector)
    }

    private get btnCodeValidate() {
        return $(Constants.BTN_VALIDAR_CODIGO_DISPOSITIVO);
    }

    async validateOtpDevice(userName: string): Promise<void> {
        let existeElemento = await this.waitForElement(Constants.BTN_VALIDAR_CODIGO_DISPOSITIVO, 10000);

        if (existeElemento) {
            let otp = await redis.readDataRedis("yapeappotp_login:*", userName.toUpperCase(), 1);
            await this.txtCodeValidation.setValue(otp);
            await this.btnCodeValidate.click();
        }
    }

}

export default ValidationDeviceScreenIOS;