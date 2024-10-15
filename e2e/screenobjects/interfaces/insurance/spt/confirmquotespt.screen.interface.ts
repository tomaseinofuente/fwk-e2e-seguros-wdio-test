
export interface IConfirmQuoteSPT {

    existButtonBuyinsurance(): Promise<void>;

    buyInsuranceSPT(): Promise<void>;
    closeScreen(): Promise<void>;
    selectKnowMore(): Promise<void>;
    selectTermsAndConditions(): Promise<void>;
    selectPrivacyPolicy(): Promise<void>;
    goBack(): Promise<void>;
    

}
