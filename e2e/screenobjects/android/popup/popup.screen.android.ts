import { IPopupScreen } from "../../interfaces/popup/popup.screen.interface.js";
import BaseScreenAnd from "../commons/base.screen.android.js";
// import Page from './page.js';


class PopupScreenAnd extends BaseScreenAnd implements IPopupScreen {
    public txtTittlePopup(title: string) {
        return $("//android.widget.TextView[@content-desc='" + title + "']");
    }
    public txtMessagePopup(message: string) {
        return $('~' + message);
    }
    public btnPopup(button: string) {

        return $("//android.widget.TextView[@text='" + button + "']");
    }

    public async validateTittle(titleParam: string) {
        await driver.pause(7000);
        titleParam = titleParam.replaceAll('\"', '');
        // await this.txtTittlePopup(titleParam).waitForExist({ timeout: 20000 });
        // let existElement = await this.waitForElement("//android.widget.TextView[@content-desc='" + titleParam + "']", 10000);
        // await expect(existElement).toEqual(true);
        let tittle = await this.txtTittlePopup(titleParam).getText();
        await expect(tittle).toEqual(titleParam);
    }

    public async validateMessage(messageParam: string) {
        messageParam = messageParam.replaceAll('\"', '');
        let existElement = await this.waitForElement("~" + messageParam, 10000);
        await expect(existElement).toEqual(true);
        let message = await this.txtMessagePopup(messageParam).getText();
        await expect(message).toEqual(messageParam);
    }

    public async validateButton(txtBtnParam: string) {
        txtBtnParam = txtBtnParam.replaceAll('\"', '');
        txtBtnParam = txtBtnParam.toUpperCase();
        let existElement = await this.waitForElement("//android.widget.TextView[@text='" + txtBtnParam + "']", 10000);
        await expect(existElement).toEqual(true);

        let txtBtn = await this.btnPopup(txtBtnParam).getText();
        await expect(txtBtn).toEqual(txtBtnParam);
    }

    public async goPressButton(txtBtnParam: string) {
        txtBtnParam = txtBtnParam.replaceAll('\"', '');
        txtBtnParam = txtBtnParam.toUpperCase();
        await this.btnPopup(txtBtnParam).click();
        await driver.pause(5000);
    }

    public async startedSessionInOtherDispositive() {
        let tittle = 'Has iniciado sesión en otro dispositivo';
        let message = 'Para ingresar desde este dispositivo, inicia sesión.';
        let button = 'INICIAR SESIÓN';
        await this.validateTittle(tittle);
        await this.validateMessage(message);
        await this.validateButton(button);
        await this.goPressButton(button);
    }
    public async existMessageStartedSessionInOtherDispositive(): Promise<boolean> {
        return (await this.waitForElement('~Has iniciado sesión en otro dispositivo', 5000));
    }
}

export default PopupScreenAnd;