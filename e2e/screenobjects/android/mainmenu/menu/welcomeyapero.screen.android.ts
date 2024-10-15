import { IWelcomeYaperoScreen } from "../../../interfaces/mainmenu/menu/welcomeyapero.screen.interface.js";
import { Constants } from "../../../support/constants.android.js";
import BaseScreenAnd from "../../commons/base.screen.android.js";

import { $ } from '@wdio/globals'

class WelcomeYaperoScreenAnd extends BaseScreenAnd implements IWelcomeYaperoScreen{
    // close
    private get btnClose() {
        return $(Constants.BTN_CLOSE_PANTALLA_BIENVENIDA_YAPE);
    }
    // Conocer Mas
    private get btnKnowMore() {
        const selector = Constants.BTN_CONOCER_MAS_BIENVENIDA_YAPE;
        return $(`android=${selector}`);
    }

    // Cierra la ventana de promoción
    public async closePromotion() {

        let existeElemento = await this.waitForElement(Constants.BTN_CLOSE_PANTALLA_BIENVENIDA_YAPE,);

        if (existeElemento)
            await this.btnClose.click();
    }
}

export default WelcomeYaperoScreenAnd;