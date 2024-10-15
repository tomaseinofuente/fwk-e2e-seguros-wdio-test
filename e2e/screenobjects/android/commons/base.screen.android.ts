import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BaseScreenAnd {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    // public open (path: string) {
    //     return browser.url(`https://the-internet.herokuapp.com/${path}`)
    // }


    public async waitForElement(selector: string, timeout = 5000): Promise<boolean> {
        try {
            const element = await $(selector);
            await element.waitForExist({ timeout: timeout });
            return true; // El elemento existe
        } catch (error) {
            return false; // El elemento no existe o el tiempo de espera expiró
        }
    }

    public async verticalScrollingToEnd() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

    }
    public async verticalScrollingToBegin() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(1,5)');

    }

    public async verticalScrollTextIntoView(selector: string) {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView(' + selector + ')');

    }

    public async verticalScrollIntoView(element: string) {
        const elem = await $(element);
        // scroll to specific element
        await elem.scrollIntoView();
        // center element within the viewport
        await elem.scrollIntoView({ block: 'center', inline: 'center' });
    }

    public async setCurrentActivity(appPackage: string, activityName: string) {
        await driver.startActivity(appPackage, activityName);

    }
    public async terminateApp(bundleId: string) {
        await driver.terminateApp(bundleId);

    }
    public async activateApp(bundleId: string) {
        await driver.activateApp(bundleId);

    }
}
