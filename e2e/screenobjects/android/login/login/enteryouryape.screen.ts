import { Constants } from "../../../support/constants.js";
import BaseScreen from "../../commons/base.screen.js";

import { $ } from '@wdio/globals'

class EnterYourYapeScreen extends BaseScreen {
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

export default new EnterYourYapeScreen();