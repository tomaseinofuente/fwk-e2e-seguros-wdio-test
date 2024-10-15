
export interface IWorldInsuranceMenuScreen {
    existOptionInsuranceWorld(option: string): Promise<void>;
    getButtonOptionInsuranceWorld(option: string): Promise<void>;
    selectOptionInsuranceWorld(option: string): Promise<void>;
}
