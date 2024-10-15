import { IShareUbicationScreen } from "../../../interfaces/login/login/shareubication.screen.interface.js";
import { Constants } from "../../../support/constants.android.js";
import BaseScreenAnd from "../../commons/base.screen.android.js";
import { $ } from '@wdio/globals'


class ShareUbicationScreenAnd extends BaseScreenAnd implements IShareUbicationScreen {

    private get lblShareUbication() {
        return $(Constants.LBL_COMPARTIR_UBICACION_CU);
    }
    private get btnActivateUbication() {
        return $(Constants.BTN_ACTIVAR_UBICACION_CU);
    }
    private get btnMoreLater() {
        return $(Constants.BTN_MAS_TARDE_CU);
    }

    public async activateUbicationMoreLater(){
        let existElement = await this.waitForElement(Constants.LBL_COMPARTIR_UBICACION_CU);
        if (existElement){
            await this.btnMoreLater.click();
        }
    }
}

export default ShareUbicationScreenAnd;
