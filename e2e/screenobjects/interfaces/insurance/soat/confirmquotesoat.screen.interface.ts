
export interface IConfirmQuoteSOAT {

    setTermsAndConditions(): Promise<void>;
    pressContinueBuyBy(): Promise<void>;
    getAmountQuote(): Promise<string>;
    closeScreen(): Promise<void>;
    goBack(): Promise<void>;
    selectNeedModifyData(): Promise<void>;
    selectTermsAndConditions(): Promise<void>;
    selectPrivacyPolicy(): Promise<void>;
}
