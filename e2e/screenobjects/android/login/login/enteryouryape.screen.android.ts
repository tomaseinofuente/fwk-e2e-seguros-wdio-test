import { IEnterYourYapeScreen } from "../../../interfaces/login/login/enteryouryape.screen.interface.js";
import { Constants } from "../../../support/constants.android.js";
import BaseScreenAnd from "../../commons/base.screen.android.js";

import { $ } from '@wdio/globals'

class EnterYourYapeScreenAnd extends BaseScreenAnd implements IEnterYourYapeScreen {
    // txtCorreoElectronico
    private get txtEmail() {
        return $(Constants.TXT_CORREO_USUARIO);
    }

    private get btnContinue() {
        return $(Constants.BTN_CONTINUAR);
    }

    async loginAccount(email: string): Promise<void> {
        await this.txtEmail.setValue(email);
        await this.btnContinue.click();
    }

}

export default EnterYourYapeScreenAnd;