import { IInitialScreen } from "../../../interfaces/login/home/initial.screen.interface.js";
import { Constants } from "../../../support/constants.android.js";
import BaseScreenAnd from "../../commons/base.screen.android.js";
// import Page from './page.js';


class InitialScreenAnd extends BaseScreenAnd implements IInitialScreen {
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
        await this.waitForElement(Constants.BTN_YA_TENGO_UNA_CUENTA, 10000);
        await this.btnAlreadyHaveAccount.click();
    }

}

export default InitialScreenAnd;