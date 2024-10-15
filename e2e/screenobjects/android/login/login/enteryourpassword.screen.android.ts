import { IEnterYourPasswordScreen } from "../../../interfaces/login/login/enteryourpassword.screen.interface.js";
import { Constants } from "../../../support/constants.android.js";
import BaseScreenAnd from "../../commons/base.screen.android.js";
import { $ } from '@wdio/globals'


class EnterYourPasswordScreenAnd extends BaseScreenAnd implements IEnterYourPasswordScreen {

    private lblEnterYourKey() {
        return $(Constants.LBL_INGRESA_TU_CLAVE_YAPE);
    }
    private lblEnterYourKeyAlternative() {
        return $(Constants.LBL_INGRESA_TU_CLAVE);
    }
    private btnTypedNumber(number: string) {
        return $("//android.widget.TextView[@text='" + number + "']");
    }

    public async existPasswordScreen() {
        return (await this.waitForElement(Constants.LBL_INGRESA_TU_CLAVE, 5000) || await this.waitForElement(Constants.LBL_INGRESA_TU_CLAVE_YAPE, 5000));
    }

    public async enterPassword(password: string) {
        let elementExist = await this.existPasswordScreen();
        if (elementExist) {
            for (let i = 0; i < password.length; i++) {
                let digit = password.charAt(i);
                await this.btnTypedNumber(digit).click();
            }
        }

    }
}

export default EnterYourPasswordScreenAnd;
