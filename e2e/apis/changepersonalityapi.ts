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

        return response;
    }


    public async changePersonalityYape(personality: string) {
        let idc = this.appConfig.getUsersYape()[0].idc;
        const response = await this.getResponseApiPostPersonality(idc, personality);
        expect(response.status).toEqual(200);
        expect(response.statusText.trim()).toEqual("OK");
        expect(response.data).toContain(personality);
    }
}
export default new ChangePersonalityApi();