import { browser } from '@wdio/globals';
import { IMenuInsurance } from '../interfaces/insurance/menuinsurance/menuinsurance.screen.interface.js';
import MenuInsuranceScreenAndroid from '../android/insurance/menuinsurance/menuinsurance.screen.android.js';
import MenuInsuranceScreenIOS from '../ios/insurance/menuinsurance/menuinsurance.screen.ios.js';
import { IDeeplinkInsurance } from '../interfaces/insurance/deeplinks/deeplink.screen.interface.js';
import DeeplinkInsuranceAnd from '../android/insurance/deeplinks/deeplink.screen.android.js';
import DeeplinkInsuranceIOS from '../ios/insurance/deeplinks/deeplink.screen.ios.js';
import { IConfirmOTPSOAT } from '../interfaces/insurance/soat/confirmotpsoat.screen.interface.js';
import ConfirmOTPSOATAnd from '../android/insurance/soat/confirmotpsoat.screen.android.js';
import ConfirmOTPSOATIOS from '../ios/insurance/soat/confirmotpsoat.screen.ios.js';
import { IConfirmQuoteSOAT } from '../interfaces/insurance/soat/confirmquotesoat.screen.interface.js';
import ConfirmQuoteSOATAnd from '../android/insurance/soat/confirmquotesoat.screen.android.js';
import ConfirmQuoteSOATIOS from '../ios/insurance/soat/confirmquotesoat.screen.ios.js';
import { ICreateQuoteSOAT } from '../interfaces/insurance/soat/createquotesoat.screen.interface.js';
import CreateQuoteSOATAnd from '../android/insurance/soat/createquotesoat.screen.android.js';
import CreateQuoteSOATIOS from '../ios/insurance/soat/createquotesoat.screen.ios.js';
import { ISummaryBuySOAT } from '../interfaces/insurance/soat/summarybuysoat.screen.interface.js';
import SummaryBuySOATAnd from '../android/insurance/soat/summarybuysoat.screen.android.js';
import SummaryBuySOATIOS from '../ios/insurance/soat/summarybuysoat.screen.ios.js';
import { IWinStateSOAT } from '../interfaces/insurance/soat/winstatesoat.screen.interface.js';
import WinStateSOATAnd from '../android/insurance/soat/winstatesoat.screen.android.js';
import WinStateSOATIOS from '../ios/insurance/soat/winstatesoat.screen.ios.js';
import { IConfirmCancellationSPT } from '../interfaces/insurance/spt/confirmcancellationspt.screen.interface.js';
import ConfirmCancellationSPTAnd from '../android/insurance/spt/confirmcancellationspt.screen.android.js';
import ConfirmCancellationSPTIOS from '../ios/insurance/spt/confirmcancellationspt.screen.ios.js';
import { IConfirmQuoteSPT } from '../interfaces/insurance/spt/confirmquotespt.screen.interface.js';
import ConfirmQuoteSPTAnd from '../android/insurance/spt/confirmquotespt.screen.android.js';
import ConfirmQuoteSPTIOS from '../ios/insurance/spt/confirmquotespt.screen.ios.js';
import { IContractedInsuranceSPT } from '../interfaces/insurance/spt/contractedinsurancespt.screen.interface.js';
import ContractedInsuranceSPTAnd from '../android/insurance/spt/contractedinsurancespt.screen.android.js';
import ContractedInsuranceSPTIOS from '../ios/insurance/spt/contractedinsurancespt.screen.ios.js';
import { IUseInsuranceSPT } from '../interfaces/insurance/spt/useinsurancespt.screen.interface.js';
import UseInsuranceSPTAnd from '../android/insurance/spt/useinsurancespt.screen.android.js';
import UseInsuranceSPTIOS from '../ios/insurance/spt/useinsurancespt.screen.ios.js';
import { IWellcomeSPT } from '../interfaces/insurance/spt/wellcomespt.screen.interface.js';
import WellcomeSPTAnd from '../android/insurance/spt/wellcomespt.screen.android.js';
import WellcomeSPTIOS from '../ios/insurance/spt/wellcomespt.screen.ios.js';
import { IWinStateSPT } from '../interfaces/insurance/spt/winstatespt.screen.interface.js';
import WinStateSPTAnd from '../android/insurance/spt/winstatespt.screen.android.js';
import WinStateSPTIOS from '../ios/insurance/spt/winstatespt.screen.ios.js';
import { IInitialScreen } from '../interfaces/login/home/initial.screen.interface.js';
import InitialScreenAnd from '../android/login/home/initial.screen.android.js';
import InitialScreenIOS from '../ios/login/home/initial.screen.ios.js';
import { IValidationCodeScreen } from '../interfaces/login/login/validationotp/validatecode.screen.interface.js';
import ValidationCodeScreenAnd from '../android/login/login/validationotp/validatecode.screen.android.js';
import ValidationCodeScreenIOS from '../ios/login/login/validationotp/validatecode.screen.ios.js';
import { IValidationDeviceScreen } from '../interfaces/login/login/validationotp/validatedevice.screen.interface.js';
import ValidationDeviceScreenAnd from '../android/login/login/validationotp/validatedevice.screen.android.js';
import ValidationDeviceScreenIOS from '../ios/login/login/validationotp/validatedevice.screen.ios.js';
import { IEnterYourPasswordScreen } from '../interfaces/login/login/enteryourpassword.screen.interface.js';
import EnterYourPasswordScreenAnd from '../android/login/login/enteryourpassword.screen.android.js';
import EnterYourPasswordScreenIOS from '../ios/login/login/enteryourpassword.screen.ios.js';
import { IEnterYourYapeScreen } from '../interfaces/login/login/enteryouryape.screen.interface.js';
import EnterYourYapeScreenAnd from '../android/login/login/enteryouryape.screen.android.js';
import EnterYourYapeScreenIOS from '../ios/login/login/enteryouryape.screen.ios.js';
import { IShareUbicationScreen } from '../interfaces/login/login/shareubication.screen.interface.js';
import ShareUbicationScreenAnd from '../android/login/login/shareubication.screen.android.js';
import ShareUbicationScreenIOS from '../ios/login/login/shareubication.screen.ios.js';
import { IMainMenuScreen } from '../interfaces/mainmenu/menu/mainmenu.screen.js';
import MainMenuScreenAnd from '../android/mainmenu/menu/mainmenu.screen.android.js';
import MainMenuScreenIOS from '../ios/mainmenu/menu/mainmenu.screen.ios.js';
import { IMainSubMenuScreen } from '../interfaces/mainmenu/menu/mainsubmenu.screen.interface.js';
import MainSubMenuScreenAnd from '../android/mainmenu/menu/mainsubmenu.screen.android.js';
import MainSubMenuScreenIOS from '../ios/mainmenu/menu/mainsubmenu.screen.ios.js';
import { IWelcomeYaperoScreen } from '../interfaces/mainmenu/menu/welcomeyapero.screen.interface.js';
import WelcomeYaperoScreenAnd from '../android/mainmenu/menu/welcomeyapero.screen.android.js';
import WelcomeYaperoScreenIOS from '../ios/mainmenu/menu/welcomeyapero.screen.ios.js';
import { IPopupScreen } from '../interfaces/popup/popup.screen.interface.js';
import PopupScreenAnd from '../android/popup/popup.screen.android.js';
import PopupScreenIOS from '../ios/popup/popup.screen.ios.js';
import { IWinStateCancellationSPT } from '../interfaces/insurance/spt/winstatecacellationspt.screen.interface.js';
import WinStateCancellationSPTAnd from '../android/insurance/spt/winstatecancellationspt.screen.android.js';
import WinStateCancellationSPTIOS from '../ios/insurance/spt/winstatecancellationspt.screen.ios.js';
import { IHelpSOAT } from '../interfaces/insurance/soat/helpsoat.screen.interface.js';
import HelpSOATAnd from '../android/insurance/soat/helpsoat.screen.android.js';
import HelpSOATIOS from '../ios/insurance/soat/helpsoat.screen.ios.js';
import ISummaryConfirmModifyDataSOAT from '../interfaces/insurance/soat/summaryconfirmmodifydatasoat.screen.android.js';
import SummaryConfirmModifyDataSOATAnd from '../android/insurance/soat/summaryconfirmmodifydatasoat.screen.android.js';
import SummaryConfirmModifyDataSOATIOS from '../ios/insurance/soat/summaryconfirmmodifydatasoat.screen.ios.js';
import { IConfirmQuoteModifyDataSOAT } from '../interfaces/insurance/soat/confirmquotemodifydatasoat.screen.interface.js';
import ConfirmQuoteModifyDataSOATAnd from '../android/insurance/soat/confirmquotemodifydatasoat.screen.android.js';
import ConfirmQuoteModifyDataSOATIOS from '../ios/insurance/soat/confirmquotemodifydatasoat.screen.ios.js';

class ScreenFactory {

    public static getDeepLinkScreen(): IDeeplinkInsurance {
        if (browser.isAndroid) {
            return new DeeplinkInsuranceAnd();
        } else if (browser.isIOS) {
            return new DeeplinkInsuranceIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getMenuInsuranceScreen(): IMenuInsurance {
        if (browser.isAndroid) {
            return new MenuInsuranceScreenAndroid();
        } else if (browser.isIOS) {
            return new MenuInsuranceScreenIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    // soat
    public static getConfirmOTPSOATScreen(): IConfirmOTPSOAT {
        if (browser.isAndroid) {
            return new ConfirmOTPSOATAnd();
        } else if (browser.isIOS) {
            return new ConfirmOTPSOATIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getConfirmQuoteSOATScreen(): IConfirmQuoteSOAT {
        if (browser.isAndroid) {
            return new ConfirmQuoteSOATAnd();
        } else if (browser.isIOS) {
            return new ConfirmQuoteSOATIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getConfirmQuoteModifyDataSOATScreen(): IConfirmQuoteModifyDataSOAT {
        if (browser.isAndroid) {
            return new ConfirmQuoteModifyDataSOATAnd();
        } else if (browser.isIOS) {
            return new ConfirmQuoteModifyDataSOATIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getCreateQuoteSOATScreen(): ICreateQuoteSOAT {
        if (browser.isAndroid) {
            return new CreateQuoteSOATAnd();
        } else if (browser.isIOS) {
            return new CreateQuoteSOATIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getSummaryBuySOATScreen(): ISummaryBuySOAT {
        if (browser.isAndroid) {
            return new SummaryBuySOATAnd();
        } else if (browser.isIOS) {
            return new SummaryBuySOATIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getSummaryConfirmModifyDataSOATScreen(): ISummaryConfirmModifyDataSOAT {
        if (browser.isAndroid) {
            return new SummaryConfirmModifyDataSOATAnd();
        } else if (browser.isIOS) {
            return new SummaryConfirmModifyDataSOATIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getWinStateSOATScreen(): IWinStateSOAT {
        if (browser.isAndroid) {
            return new WinStateSOATAnd();
        } else if (browser.isIOS) {
            return new WinStateSOATIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getHelpSOATScreen(): IHelpSOAT {
        if (browser.isAndroid) {
            return new HelpSOATAnd();
        } else if (browser.isIOS) {
            return new HelpSOATIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    // SPT
    public static getConfirmCancellationSPTScreen(): IConfirmCancellationSPT {
        if (browser.isAndroid) {
            return new ConfirmCancellationSPTAnd();
        } else if (browser.isIOS) {
            return new ConfirmCancellationSPTIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getConfirmQuoteSPTScreen(): IConfirmQuoteSPT {
        if (browser.isAndroid) {
            return new ConfirmQuoteSPTAnd();
        } else if (browser.isIOS) {
            return new ConfirmQuoteSPTIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getContractedInsuranceSPTScreen(): IContractedInsuranceSPT {
        if (browser.isAndroid) {
            return new ContractedInsuranceSPTAnd();
        } else if (browser.isIOS) {
            return new ContractedInsuranceSPTIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getUseInsuranceSPTScreen(): IUseInsuranceSPT {
        if (browser.isAndroid) {
            return new UseInsuranceSPTAnd();
        } else if (browser.isIOS) {
            return new UseInsuranceSPTIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getWellcomeSPTScreen(): IWellcomeSPT {
        if (browser.isAndroid) {
            return new WellcomeSPTAnd();
        } else if (browser.isIOS) {
            return new WellcomeSPTIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getWinStateSPTScreen(): IWinStateSPT {
        if (browser.isAndroid) {
            return new WinStateSPTAnd();
        } else if (browser.isIOS) {
            return new WinStateSPTIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getWinStateCancellationSPTScreen(): IWinStateCancellationSPT {
        if (browser.isAndroid) {
            return new WinStateCancellationSPTAnd();
        } else if (browser.isIOS) {
            return new WinStateCancellationSPTIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    // Login/Home
    public static getInitialScreen(): IInitialScreen {
        if (browser.isAndroid) {
            return new InitialScreenAnd();
        } else if (browser.isIOS) {
            return new InitialScreenIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getValidateCodeScreen(): IValidationCodeScreen {
        if (browser.isAndroid) {
            return new ValidationCodeScreenAnd();
        } else if (browser.isIOS) {
            return new ValidationCodeScreenIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getValidateDeviceScreen(): IValidationDeviceScreen {
        if (browser.isAndroid) {
            return new ValidationDeviceScreenAnd();
        } else if (browser.isIOS) {
            return new ValidationDeviceScreenIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getEnterYourPasswordScreen(): IEnterYourPasswordScreen {
        if (browser.isAndroid) {
            return new EnterYourPasswordScreenAnd();
        } else if (browser.isIOS) {
            return new EnterYourPasswordScreenIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getEnterYourYapeScreen(): IEnterYourYapeScreen {
        if (browser.isAndroid) {
            return new EnterYourYapeScreenAnd();
        } else if (browser.isIOS) {
            return new EnterYourYapeScreenIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getShareUbicationScreen(): IShareUbicationScreen {
        if (browser.isAndroid) {
            return new ShareUbicationScreenAnd();
        } else if (browser.isIOS) {
            return new ShareUbicationScreenIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    // mainmenu
    public static getMainMenuScreen(): IMainMenuScreen {
        if (browser.isAndroid) {
            return new MainMenuScreenAnd();
        } else if (browser.isIOS) {
            return new MainMenuScreenIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getMainSubMenuScreen(): IMainSubMenuScreen {
        if (browser.isAndroid) {
            return new MainSubMenuScreenAnd();
        } else if (browser.isIOS) {
            return new MainSubMenuScreenIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    public static getWellcomeYaperoScreen(): IWelcomeYaperoScreen {
        if (browser.isAndroid) {
            return new WelcomeYaperoScreenAnd();
        } else if (browser.isIOS) {
            return new WelcomeYaperoScreenIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
    // Popup
    public static getPopupScreen(): IPopupScreen {
        if (browser.isAndroid) {
            return new PopupScreenAnd();
        } else if (browser.isIOS) {
            return new PopupScreenIOS();
        } else {
            throw new Error("Plataforma no soportada");
        }
    }
}
export default ScreenFactory;