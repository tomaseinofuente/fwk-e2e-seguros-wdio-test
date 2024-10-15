import { IHelpSOAT } from "../../../interfaces/insurance/soat/helpsoat.screen.interface.js";
import BaseScreenIOS from "../../commons/base.screen.ios.js";

import { $ } from '@wdio/globals'

class HelpSOATIOS extends BaseScreenIOS implements IHelpSOAT {

    public get btnBack() {
        return $("~Atrás");

    }

    public async goBack() {
       
        await this.btnBack.click();
    }
}

export default HelpSOATIOS;