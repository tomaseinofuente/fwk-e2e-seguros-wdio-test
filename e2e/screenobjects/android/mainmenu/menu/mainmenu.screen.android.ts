import { Constants } from "../../../support/constants.android.js";
import EnterYourPasswordScreen from "../../login/login/enteryourpassword.screen.android.js";
import AppConfig from "../../../support/app.config.js";


import { $ } from '@wdio/globals'
import BaseScreenAnd from "../../commons/base.screen.android.js";
import { IMainMenuScreen } from "../../../interfaces/mainmenu/menu/mainmenu.screen.js";

class MainMenuScreenAnd extends BaseScreenAnd implements IMainMenuScreen{
    // Ver Mas
    private get btnSeeMore() {
        const selector = Constants.BTN_VER_MAS_MENU_PRINCIPAL;
        return $(`android=${selector}`);
    }
    public async existSeeMore(){
        return (await this.waitForElement(Constants.BTN_VER_MAS_MENU_PRINCIPAL, 5000));
    }

    private get btnScanQR() {
        return $("~Escanear qr");
    }
    private get btnYapear() {
        return $("~Yapear");
    }

    public async seeMore() {
        let enterYourPasswordScreen = new EnterYourPasswordScreen();
        let existeElemento = await this.waitForElement(`android=${Constants.BTN_VER_MAS_MENU_PRINCIPAL}`, 10000);
        
        if (existeElemento) {
            await this.btnSeeMore.click();
        }
        else{
            let appConfig = new AppConfig(process.env.ENV || "stg");
            let password = appConfig.getUsersYape()[0].password;
            let appId = "com.yape." + (process.env.ENV || "stg");
            await this.terminateApp(appId);
            await this.activateApp(appId);
            // await this.setCurrentActivity("com.yape.stg", "com.yape.activity.MainActivity");
            await enterYourPasswordScreen.enterPassword(password);
            browser.pause(5000);
            existeElemento = await this.waitForElement(`android=${Constants.BTN_VER_MAS_MENU_PRINCIPAL}`, 10000);
            if (existeElemento) {
                await this.btnSeeMore.click();
            }
        }
    }
    public async existButtonScanQR(): Promise<boolean> {
        return (await this.waitForElement("~Escanear qr", 5000));
    }

    public async existButtonYapear(): Promise<boolean> {
        return (await this.waitForElement("~Yapear", 5000));
    }

    public async validateSeeMainMenu() {
        let existButtonScanQR = await this.existButtonScanQR();
        let existButtonYapear = await this.existButtonYapear();
        await expect(existButtonScanQR).toEqual(true);
        await expect(existButtonYapear).toEqual(true);
    }
}

export default MainMenuScreenAnd;

