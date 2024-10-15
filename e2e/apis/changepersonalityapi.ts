import axios from 'axios';
import AppConfig from "../screenobjects/support/app.config.js";

class ChangePersonalityApi {

    protected appConfig = new AppConfig(process.env.ENV || "stg");

    async getResponseApiPostPersonality(idc: string, personality: string) {
        let host = this.appConfig.getApisPersonality()[0].host;
        let endPointPersonality = this.appConfig.getApisPersonality()[0].endPointPersonality;
        const response = await axios({

            url: `${host}${endPointPersonality}`,
            headers: {
                'Content-Type': 'text/plain'
            },
            method: 'post',
            data: `${idc},${personality}`
        });
        console.log("getResponseApiPostPersonality: " + idc + "-" + personality);
        console.log(response);
        return response;
    }


    public async changePersonalityYape(personality: string) {
        let idc = this.appConfig.getUsersYape()[0].idc;
        const response = await this.getResponseApiPostPersonality(idc, personality);
        console.log("Response: " + response.data);
        await expect(response.status).toEqual(200);
        await expect(response.statusText.trim()).toEqual("OK");
        await expect(response.data).toContain(personality);
        await browser.pause(2000);
    }
}
export default new ChangePersonalityApi();