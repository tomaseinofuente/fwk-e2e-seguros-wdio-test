import { IWelcomeYaperoScreen } from "../../../interfaces/mainmenu/menu/welcomeyapero.screen.interface.js";
import { Constants } from "../../../support/constants.ios.js";
import BaseScreenIOS from "../../commons/base.screen.ios.js";

import { $ } from '@wdio/globals'

class WelcomeYaperoScreenIOS extends BaseScreenIOS implements IWelcomeYaperoScreen{
    // close
    private get btnClose() {
        return $(Constants.BTN_CLOSE_PANTALLA_BIENVENIDA_YAPE);
    }
    // Conocer Mas
    private get btnKnowMore() {
        const selector = Constants.BTN_CONOCER_MAS_BIENVENIDA_YAPE;
        return $(selector);
    }

    // Cierra la ventana de promoción
    public async closePromotion() {

        let existeElemento = await this.waitForElement(Constants.BTN_CLOSE_PANTALLA_BIENVENIDA_YAPE,);

        if (existeElemento)
            await this.btnClose.click();
    }
}

export default WelcomeYaperoScreenIOS;