import { Constants } from "../../../support/constants.ios.js";
import EnterYourPasswordScreen from "../../login/login/enteryourpassword.screen.ios.js";
import AppConfig from "../../../support/app.config.js";
import { $ } from '@wdio/globals'
import BaseScreenIOS from "../../commons/base.screen.ios.js";
import { IMainMenuScreen } from "../../../interfaces/mainmenu/menu/mainmenu.screen.js";

class MainMenuScreenIOS extends BaseScreenIOS implements IMainMenuScreen {
    // Ver Mas
    private get btnSeeMore() {
        const selector = Constants.BTN_VER_MAS_MENU_PRINCIPAL;
        return $(selector);
    }
    private get btnScanQR() {
        return $("//XCUIElementTypeButton[@name='Escanear QR']");
    }
    private get btnYapear() {
        return $("//XCUIElementTypeButton[@name='Yapear']");
    }

    public async existSeeMore() {
        return (await this.waitForElement(Constants.BTN_VER_MAS_MENU_PRINCIPAL, 5000));
    }

    public async seeMore() {
        let existeElemento = await this.waitForElement(Constants.BTN_VER_MAS_MENU_PRINCIPAL, 10000);
        let enterYourPasswordScreen = new EnterYourPasswordScreen();

        if (existeElemento) {
            await this.btnSeeMore.click();
        }
        else {
            let appConfig = new AppConfig(process.env.ENV || "stg");
            let password = appConfig.getUsersYape()[0].password;
            let appId = "com.yape." + (process.env.ENV || "stg");
            await this.terminateApp(appId);
            await this.activateApp(appId);
            await enterYourPasswordScreen.enterPassword(password);
            browser.pause(5000);
            existeElemento = await this.waitForElement(Constants.BTN_VER_MAS_MENU_PRINCIPAL, 10000);
            if (existeElemento) {
                await this.btnSeeMore.click();
            }
        }
    }

    public async existButtonScanQR(): Promise<boolean> {
        return (await this.waitForElement("//XCUIElementTypeButton[@name='Escanear QR']", 5000));
    }
    public async existButtonYapear(): Promise<boolean> {
        return (await this.waitForElement("//XCUIElementTypeButton[@name='Yapear']", 5000));
    }

    public async validateSeeMainMenu() {
        let existButtonScanQR = await this.existButtonScanQR();
        let existButtonYapear = await this.existButtonYapear();
        await expect(existButtonScanQR).toEqual(true);
        await expect(existButtonYapear).toEqual(true);
    }
}

export default MainMenuScreenIOS;