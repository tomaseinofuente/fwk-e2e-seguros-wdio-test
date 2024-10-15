export interface IMainMenuScreen {

    existSeeMore(): Promise<boolean>;
    seeMore(): Promise<void>;
    existButtonScanQR(): Promise<boolean>;

    existButtonYapear(): Promise<boolean>;

    validateSeeMainMenu(): Promise<void>;
}

