import { IPopupScreen } from "../../interfaces/popup/popup.screen.interface.js";
import { Constants } from "../../support/constants.ios.js";
import BaseScreenIOS from "../commons/base.screen.ios.js";
// import Page from './page.js';


class PopupScreenIOS extends BaseScreenIOS implements IPopupScreen {

    public txtTittlePopup(title: string) {
        return $("//XCUIElementTypeStaticText[@name='" + title + "']");
    }
    public txtMessagePopup(message: string) {
        return $('~' + message);
    }
    public btnByAccesability(button: string) {
        button = button.replaceAll('\"', '');

        // let lblBtn = "";
        // switch (button) {
        //     case "CERRAR":
        //     case "Cerrar":
        //         lblBtn = Constants.BTN_CERRAR_POPUP;
        //         break;
        //     case "IR AL INICIO":
        //     case "Ir al inicio":
        //         lblBtn = Constants.BTN_IR_AL_INICIO_POPUP;
        //         break;
        //     case "CONTACTAR CON UN ASESOR":
        //     case "Contactar con un asesor":
        //         lblBtn = Constants.BTN_CONTACTAR_CON_UN_ASESOR_POPUP;
        //         break;
        // }
        return $('~' + button);
    }
    // public get btnClose() {

    //     return $(Constants.BTN_CERRAR_POPUP);
    // }



    public async validateTittle(titleParam: string) {
        await driver.pause(5000);
        titleParam = titleParam.replaceAll('\"', '');
        // await this.txtTittlePopup(titleParam).waitForExist({ timeout: 20000 });
        let existElement = await this.waitForElement("//XCUIElementTypeStaticText[@name='" + titleParam + "']");
        await expect(existElement).toBe(true);
        let tittle = await this.txtTittlePopup(titleParam).getText();
        await expect(tittle).toEqual(titleParam);
    }

    public async validateMessage(messageParam: string) {
        messageParam = messageParam.replaceAll('\"', '');
        let message = await this.txtMessagePopup(messageParam).getText();
        await expect(message).toEqual(messageParam);
    }

    public async validateButton(txtBtnParam: string) {
        txtBtnParam = txtBtnParam.replaceAll('\"', '');
        let txtBtn = await this.btnByAccesability(txtBtnParam).getText();
        await expect(txtBtn).toEqual(txtBtnParam);
    }

    public async goPressButton(txtBtnParam: string) {
        // txtBtnParam = txtBtnParam.replaceAll('\"', '');
        await this.btnByAccesability(txtBtnParam).click();
        await driver.pause(5000);
    }
    public async existMessageStartedSessionInOtherDispositive(): Promise<boolean> {
        return (await this.waitForElement('~Has iniciado sesión en otro dispositivo', 5000));
    }

    public startedSessionInOtherDispositive(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export default PopupScreenIOS;