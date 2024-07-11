import { Constants } from "../../../support/constants.js";
import BaseScreen from "../../commons/base.screen.js";
import enteryourpasswordScreen from "../../login/login/enteryourpassword.screen.js";
import AppConfig from "../../../support/app.config.js";


import { $ } from '@wdio/globals'

class MainMenuScreen extends BaseScreen {
    // Ver Mas
    private get btnSeeMore() {
        const selector = Constants.BTN_VER_MAS_MENU_PRINCIPAL;
        return $(`android=${selector}`);
    }

    public async seeMore() {
        let existeElemento = await this.waitForElement(`android=${Constants.BTN_VER_MAS_MENU_PRINCIPAL}`, 10000);
        
        if (existeElemento) {
            await this.btnSeeMore.click();
        }
        else{
            let appConfig = new AppConfig(process.env.ENV || "stg");
            let password = appConfig.getUsersYape()[0].password;

            await this.setCurrentActivity("com.yape.stg", "com.yape.activity.MainActivity");
            await enteryourpasswordScreen.enterPassword(password);
            browser.pause(5000);
            existeElemento = await this.waitForElement(`android=${Constants.BTN_VER_MAS_MENU_PRINCIPAL}`, 10000);
            if (existeElemento) {
                await this.btnSeeMore.click();
            }
        }
    }
}

export default new MainMenuScreen();