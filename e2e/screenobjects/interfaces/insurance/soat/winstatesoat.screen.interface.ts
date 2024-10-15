
export interface IWinStateSOAT {

    goMainMenu(): Promise<void>;

    getAmount(amount?: string): Promise<string>;

    validateAmount(amountExpected?: string, amountReceived?: string, numDec?: string): Promise<void>;

}
