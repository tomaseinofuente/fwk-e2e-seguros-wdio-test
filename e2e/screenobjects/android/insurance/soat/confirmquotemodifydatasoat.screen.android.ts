import { Constants } from "../../../support/constants.android.js";
import BaseScreenAnd from "../../commons/base.screen.android.js";

import { $ } from '@wdio/globals'

class ConfirmQuoteModifyDataSOATAnd extends BaseScreenAnd {

    private get lblTitle() {
        return $("//android.widget.TextView[@text='Modificar datos']");
    }
    private get lblDescription() {
        return $("//android.widget.TextView[@text='Para actualizar los datos, puedes hacerlo a través de la página web de Pacífico Seguros.']");
    }
    private get btnGoToWebPacifico() {
        return $("~Ir a la web de pacífico");
    }
    private get btnGoBack() {
        return $("~Regresar");
    }
    public async goBack() {
        await this.btnGoBack.click();
    }
    public async goGoToWebPacifico() {
        await this.btnGoToWebPacifico.click();
        await browser.pause(7000);
    }

    public async validateElementsScreen() {
        await expect((await this.lblTitle.getText()).trim().toLowerCase()).toEqual("modificar datos");
       
    }

}

export default ConfirmQuoteModifyDataSOATAnd;