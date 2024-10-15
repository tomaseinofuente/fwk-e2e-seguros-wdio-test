import { ISummaryBuySOAT } from "../../../interfaces/insurance/soat/summarybuysoat.screen.interface.js";

import { $ } from '@wdio/globals'
import BaseScreenIOS from "../../commons/base.screen.ios.js";

class SummaryBuySOATIOS extends BaseScreenIOS implements ISummaryBuySOAT {
    private get btnBack() {
        return $("");
    }
    private get btnClose() {
        return $("~Cerrar");
    }
    private get lnkNeedModifyData() {
        return $("");
    }
    private get btnRepurchase() {
        return $("~Volver a comprar");
    }
    

}

export default SummaryBuySOATIOS;