

export interface IWellcomeSPT {

    selectContinue(): Promise<void>;
    closeScreen(): Promise<void>;
    validateElementsInScreen(): Promise<void>;

}


