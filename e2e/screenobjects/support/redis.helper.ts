import { createClient } from 'redis'
import { setTimeout } from "timers/promises";
import AppConfig from "./app.config.js";

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

class RedisHelper {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */



    public openConnectionRedis() {
        let appConfig = new AppConfig(process.env.ENV || "stg");

        let host = appConfig.getRedisConfig()[0].host;
        let password = appConfig.getRedisConfig()[0].password;
        let port = appConfig.getRedisConfig()[0].port;
        let ssl = appConfig.getRedisConfig()[0].ssl;

        let client = createClient({
            password: password, // use your password here
            socket: {
                host: host,
                port: port,
                tls: ssl
            }
        });

        return client
    }

    public async readDataRedis(key:string, textSearch: string, cont: number): Promise<string> {
        let client = this.openConnectionRedis()
        let arrayContenido: string[] = [];
        let otp = "";
        client.on('error', (err) => console.log('Redis Client Error', err));
        await client.connect();
        //Obtiene los datos de la base de datos Redis a partir de la clave yapeappotp_login: con el comodin *
        const listYapeappotpLogin = await client.keys(key);

        if (listYapeappotpLogin) {
            console.log(listYapeappotpLogin);
            for (let i = 0; i < listYapeappotpLogin.length; i++) {
                let txtClave = listYapeappotpLogin[i];
                console.log(txtClave);
                console.log(await client.get(txtClave));
                const valor = await client.get(txtClave);
                console.log(valor);
                if (valor !== null) {
                    arrayContenido.push(valor);
                }
                // arrayContenido.push(await client.get(clave));

            }
            console.log(arrayContenido)
            otp = await this.getValueForKey(arrayContenido, textSearch);
            console.log("otp");
            console.log(otp);
            if (otp === "" && cont < 5) {
                await setTimeout(3000);
                cont++;
                await this.readDataRedis(key, textSearch, cont);

            }
        }
        else {
            console.log("no esxiste la clave: " + textSearch)
            if (otp === "" && cont < 5) {
                await setTimeout(3000);
                cont++;
                await this.readDataRedis(key, textSearch, cont);

            }
        }

        return otp;

    }
    public async getValueForKey(data: string[], keySearch: string): Promise<string> {
        interface OtpObject {
            otpId: string;
            otp: string;
            id: string;
            type: string;
            startTime: number;
            expired: boolean;
        }
        let otpObtained: string;


        // .map(item => JSON.parse(item.replace(/\\/g, '')) as OtpObject)
        const filteredData = data
            .map(item => {
                // Eliminar las comillas dobles adicionales y reemplazar \\u003d\\u003d con ==
                const cleanedItem = item.slice(1, -1).replace(/\\\\u003d/g, '=').replace(/\\"/g, '"');
                return JSON.parse(cleanedItem) as OtpObject;
            })
            .filter(obj => obj.id.includes(keySearch))
            .sort((a, b) => b.startTime - a.startTime);

        otpObtained = filteredData.length > 0 ? filteredData[0].otp : "";


        return otpObtained;

    }
}

export default new RedisHelper();