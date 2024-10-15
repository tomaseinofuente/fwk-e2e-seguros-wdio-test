import { IEnterYourYapeScreen } from "../../../interfaces/login/login/enteryouryape.screen.interface.js";
import { Constants } from "../../../support/constants.ios.js";
import BaseScreenIOS from "../../commons/base.screen.ios.js";

import { $ } from '@wdio/globals'

class EnterYourYapeScreenIOS extends BaseScreenIOS implements IEnterYourYapeScreen{
    // txtCorreoElectronico
    private get txtEmail() {
        return $(Constants.TXT_CORREO_USUARIO);
    }

    private get btnContinue() {
        return $(Constants.BTN_CONTINUAR);
    }

    async loginAccount(email: string): Promise<void> {
        let existeElemento = await this.waitForElement(Constants.TXT_CORREO_USUARIO, 5000);
        if (existeElemento){
            await this.txtEmail.setValue(email);
            await this.btnContinue.click();
        }
    }

}

export default EnterYourYapeScreenIOS;