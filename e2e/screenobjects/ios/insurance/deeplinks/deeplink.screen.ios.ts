import { IDeeplinkInsurance } from "../../../interfaces/insurance/deeplinks/deeplink.screen.interface.js";
import BaseScreenIOS from "../../commons/base.screen.ios.js";


class DeeplinkInsuranceIOS extends BaseScreenIOS implements IDeeplinkInsurance {

    public async executeDeepLink(deepLink: string) {
        await browser.pause(3000);
        await driver.url(deepLink);
        await browser.pause(7000);
    }
}

export default DeeplinkInsuranceIOS;