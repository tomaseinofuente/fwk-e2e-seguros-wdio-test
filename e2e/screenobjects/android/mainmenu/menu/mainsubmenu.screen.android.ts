import { IMainSubMenuScreen } from "../../../interfaces/mainmenu/menu/mainsubmenu.screen.interface.js";
import { Constants } from "../../../support/constants.android.js";
import BaseScreenAnd from "../../commons/base.screen.android.js";

import { $ } from '@wdio/globals'

class MainSubMenuScreenAnd extends BaseScreenAnd implements IMainSubMenuScreen{
    // Seguros
    private get btnInsurance() {
        const selector = Constants.BTN_SEGUROS_MENU_PRINCIPAL;
        return $(`android=${selector}`)
    }
    // SOAT
    private get btnSOAT() {
        const selector = Constants.BTN_SOAT_MENU_PRINCIPAL;
        return $(`android=${selector}`)
    }

    public async selectSOAT() {
        await this.btnSOAT.click();
    }

    public async selectInsurance() {
        await browser.pause(3000);
        await this.btnInsurance.click();
    }
}

export default MainSubMenuScreenAnd;