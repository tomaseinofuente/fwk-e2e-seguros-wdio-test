
import { $ } from '@wdio/globals'
import BaseScreenIOS from "../../commons/base.screen.ios.js";

class ConfirmQuoteModifyDataSOATIOS extends BaseScreenIOS {

    private get lblTitle() {
        return $("~Modificar datos");
    }
    private get lblDescription() {
        return $("~Para actualizar los datos, puedes hacerlo a través de la página web de Pacífico Seguros.");
    }
    private get btnGoToWebPacifico() {
        return $("//XCUIElementTypeStaticText[@name='Para actualizar los datos, puedes hacerlo a través de la página web de Pacífico Seguros.']/following-sibling::XCUIElementTypeButton[1]");
    }
    private get btnGoBack() {
        return $("//XCUIElementTypeStaticText[@name='Para actualizar los datos, puedes hacerlo a través de la página web de Pacífico Seguros.']/following-sibling::XCUIElementTypeButton[2]");
    }
    public async goBack() {
        await this.btnGoBack.click();
    }
    public async goGoToWebPacifico() {
        await this.btnGoToWebPacifico.click();
        await browser.pause(7000);
    }
    public async validateElementsScreen() {
        await expect((await (await this.lblTitle).getAttribute("value")).trim().toLowerCase()).toEqual("modificar datos");
       
    }
}

export default ConfirmQuoteModifyDataSOATIOS;