export interface IMenuInsurance {

    selectSaferMoney(optInsurance: string): Promise<void>;
    goBack(): Promise<void>;
    validateElementsScreen(): Promise<void>;
}
