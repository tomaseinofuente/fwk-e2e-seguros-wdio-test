import { IMainSubMenuScreen } from "../../../interfaces/mainmenu/menu/mainsubmenu.screen.interface.js";
import { Constants } from "../../../support/constants.ios.js";
import BaseScreenIOS from "../../commons/base.screen.ios.js";

import { $ } from '@wdio/globals'

class MainSubMenuScreenIOS extends BaseScreenIOS implements IMainSubMenuScreen{
    // Seguros
    private get btnInsurance() {
        const selector = Constants.BTN_SEGUROS_MENU_PRINCIPAL;
        return $(selector)
    }
    // SOAT
    private get btnSOAT() {
        const selector = Constants.BTN_SOAT_MENU_PRINCIPAL;
        return $(selector)
    }

    public async selectSOAT() {
        await this.btnSOAT.click();
    }

    public async selectInsurance() {
        await browser.pause(3000);
        await this.btnInsurance.click();
    }
}

export default MainSubMenuScreenIOS;