
export interface IValidationCodeScreen {


    validateOtp(phone: string): Promise<void>;

}
