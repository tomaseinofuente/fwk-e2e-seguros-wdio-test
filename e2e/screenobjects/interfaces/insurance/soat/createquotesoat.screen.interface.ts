
export interface ICreateQuoteSOAT {

    enterNumberPlate(plate: string): Promise<void>;
    pressQuote(): Promise<void>;

    selectPlateHistorical(status: string): Promise<void>;
    goBack(): Promise<void>;
    goHelpSoat(): Promise<void>;
    validateElementsScreen(): Promise<void>;
}

