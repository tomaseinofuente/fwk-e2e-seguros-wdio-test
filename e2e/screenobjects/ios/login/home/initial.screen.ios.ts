import { IInitialScreen } from "../../../interfaces/login/home/initial.screen.interface.js";
import { Constants } from "../../../support/constants.ios.js";
import BaseScreenIOS from "../../commons/base.screen.ios.js";
// import Page from './page.js';


class InitialScreenIOS extends BaseScreenIOS implements IInitialScreen {
    public get btnCreateAccount() {
        return $(Constants.BTN_CREAR_UNA_CUENTA);
    }

    public get btnAlreadyHaveAccount() {
        // return $("~Ya tengo una cuenta");
        // const selector = 'new UiSelector().description("Ya tengo una cuenta")';
        // return $(`android=${selector}`);
        return $(Constants.BTN_YA_TENGO_UNA_CUENTA);
    }

    public async alreadyHaveAccount() {
        let existeElemento = await this.waitForElement(Constants.BTN_CREAR_UNA_CUENTA, 5000);
        if (existeElemento)
            await this.btnAlreadyHaveAccount.click();
    }

}

export default InitialScreenIOS;