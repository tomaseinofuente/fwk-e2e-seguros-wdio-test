import { ISummaryBuySOAT } from "../../../interfaces/insurance/soat/summarybuysoat.screen.interface.js";
import BaseScreenAnd from "../../commons/base.screen.android.js";

import { $ } from '@wdio/globals'

class SummaryBuySOATAnd extends BaseScreenAnd implements ISummaryBuySOAT {
    private get btnBack() {
        return $("//android.widget.TextView[@text='SOAT']/preceding-sibling::android.widget.Button");
    }
    private get btnClose() {
        return $("~Cerrar");
    }
    private get lnkNeedModifyData() {
        return $("//android.widget.TextView[@text='¿Necesitas modificar los datos?']/following-sibling::android.view.View");
    }
    private get btnRepurchase() {
        return $("~Volver a comprar");
    }
    

}

export default SummaryBuySOATAnd;