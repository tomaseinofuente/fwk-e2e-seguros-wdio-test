import BaseScreenAnd from "../../commons/base.screen.android.js";
import { setValue, getValue } from "@wdio/shared-store-service";
import { IDeeplinkInsurance } from "../../../interfaces/insurance/deeplinks/deeplink.screen.interface.js";


class DeeplinkInsuranceAnd extends BaseScreenAnd implements IDeeplinkInsurance {

    public async executeDeepLink(deepLink: string) {
        await browser.pause(3000);
        let packageId = await getValue("bundleId");
        await driver.execute('mobile:deepLink', {
            url: deepLink,
            package: packageId
        });
        await browser.pause(5000);
    }
}

export default DeeplinkInsuranceAnd;