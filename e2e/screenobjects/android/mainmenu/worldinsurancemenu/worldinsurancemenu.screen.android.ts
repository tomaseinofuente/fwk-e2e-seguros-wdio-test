import BaseScreenAnd from "../../commons/base.screen.android.js";

import { $ } from '@wdio/globals'

class WorldInsuranceMenuScreenAnd extends BaseScreenAnd {
    // Ver Mas
    private async existOptionInsuranceWorld(option: string) {
        return await this.waitForElement("//android.widget.TextView[@text='" + option + "']");
    }
    private getButtonOptionInsuranceWorld(option: string) {
        return $("//android.widget.TextView[@text='" + option + "']");
    }

    public async selectOptionInsuranceWorld(option: string) {
        let existeElemento = await this.existOptionInsuranceWorld(option);

        if (existeElemento) {
            await this.getButtonOptionInsuranceWorld(option).click();
        }
        else {
            // TODO: Lanzar una excepcion porque no se encontro el boton
        }
    }
}

export default WorldInsuranceMenuScreenAnd;