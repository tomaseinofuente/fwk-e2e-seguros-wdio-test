import { $ } from '@wdio/globals'
import BaseScreenIOS from "../../commons/base.screen.ios.js";
import { IShareUbicationScreen } from '../../../interfaces/login/login/shareubication.screen.interface.js';


class ShareUbicationScreenIOS extends BaseScreenIOS implements IShareUbicationScreen {

    private get lblShareUbication() {
        return $("~Compártenos tu ubicación");
    }
    private get btnActivateUbication() {
        return $("//XCUIElementTypeButton[1]");
    }
    private get btnMoreLater() {
        return $("//XCUIElementTypeButton[2]");
    }
    
    public async activateUbicationMoreLater(){
        let existElement = await this.waitForElement("~Compártenos tu ubicación");
        if (existElement){
            await this.btnMoreLater.click();
        }
    }
}

export default ShareUbicationScreenIOS;
