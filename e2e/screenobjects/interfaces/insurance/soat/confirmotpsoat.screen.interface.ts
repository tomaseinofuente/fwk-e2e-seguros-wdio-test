export interface IConfirmOTPSOAT {

    yapearSoatBy(): Promise<void>;
    closeScreen(): Promise<void>;
    goBack(): Promise<void>;
    selectReSendCode(): Promise<void>;

    
}
