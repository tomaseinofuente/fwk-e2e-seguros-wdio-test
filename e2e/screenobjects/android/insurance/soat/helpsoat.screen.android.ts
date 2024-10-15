import { IHelpSOAT } from "../../../interfaces/insurance/soat/helpsoat.screen.interface.js";
import BaseScreenAnd from "../../commons/base.screen.android.js";

import { $ } from '@wdio/globals'

class HelpSOATAnd extends BaseScreenAnd implements IHelpSOAT {

    public get btnBack() {
        return $("//android.widget.Button");

    }
    

    public async goBack() {
       
        await this.btnBack.click();
    }
}

export default HelpSOATAnd;