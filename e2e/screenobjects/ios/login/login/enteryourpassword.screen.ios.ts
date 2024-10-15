import { Constants } from "../../../support/constants.ios.js";
import { $ } from '@wdio/globals'
import BaseScreenIOS from "../../commons/base.screen.ios.js";
import { IEnterYourPasswordScreen } from "../../../interfaces/login/login/enteryourpassword.screen.interface.js";


class EnterYourPasswordScreenIOS extends BaseScreenIOS implements IEnterYourPasswordScreen {
    private lblEnterYourKey() {
        return $(Constants.LBL_INGRESAR_TU_CLAVE_YAPE);
    }
    private lblEnterYourKeyAlternative() {
        return $(Constants.LBL_INGRESAR_TU_CLAVE_ALTERNO);
    }
    private btnTypedNumber(number: string) {
        return $("(//XCUIElementTypeStaticText[@name='" + number + "'])[1]");

    }

    public async existPasswordScreen() {
        return (await this.waitForElement(Constants.LBL_INGRESAR_TU_CLAVE_ALTERNO, 5000) || await this.waitForElement(Constants.LBL_INGRESAR_TU_CLAVE_YAPE, 5000));
    }

    public async enterPassword(password: string) {
        let existeElemento = await this.existPasswordScreen();
        if (existeElemento) {
            for (let i = 0; i < password.length; i++) {
                let digit = password.charAt(i);
                await this.btnTypedNumber(digit).click();
            }
        }
        

    }
}

export default EnterYourPasswordScreenIOS;