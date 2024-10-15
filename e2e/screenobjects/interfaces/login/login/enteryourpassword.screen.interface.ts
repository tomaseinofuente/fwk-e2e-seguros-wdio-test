
export interface IEnterYourPasswordScreen {

    existPasswordScreen(): Promise<boolean>;

    enterPassword(password: string): Promise<void>;
}
