
export interface IPopupScreen {

    validateTittle(titleParam: string): Promise<void>;
    validateMessage(messageParam: string): Promise<void>;
    validateButton(txtBtnParam: string): Promise<void>;
    goPressButton(txtBtnParam: string): Promise<void>;
    startedSessionInOtherDispositive(): Promise<void>;
    existMessageStartedSessionInOtherDispositive(): Promise<boolean>;
}
