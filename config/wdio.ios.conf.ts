import { config as baseConfig } from './wdio.conf.ts';
import AppConfig from "../e2e/screenobjects/support/app.config.ts";
import { join } from 'path'

let appConfig = new AppConfig(process.env.ENV || "stg");

let ipaPath = appConfig.getAppPaths()[0].pathIpa;


export const config:  WebdriverIO.Config = {
    ...baseConfig,

    // user: "tomasinofuente_0zmjNr",
    // key: "fP2rKYcDxTkqRnjLr65w",

    // services: [
    //     ['browserstack', {
    //         browserstackLocal: true
    //     }]
    // ],
    // ============
    // Specs
    // ============
    // '../e2e/features/ios/soat/**/soat-cotizar-PGA0002.feature',
    specs: [
        // '../e2e/features/ios/soat/winstate/*.feature'
        // '../e2e/features/ios/soat/cotizar/soat-cotizar-PGA0001.feature',
        // '../e2e/features/ios/soat/cotizar/soat-cotizar-MNK0030.feature'
        // '../e2e/features/spt/happy/bienvenida/*.feature'
        '../e2e/features/spt/happy/winstate/*.feature'
    ],
  

    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
    capabilities: [
        {
            // The defaults you need to have in your config
            "platformName": 'iOS',
            "maxInstances": 1,
            // For W3C the appium capabilities need to have an extension prefix
            // This is `appium:` for all Appium Capabilities which can be found here
            // http://appium.io/docs/en/writing-running-appium/caps/

            //
            // NOTE: Change this name according to the Simulator you have created on your local machine
            'appium:deviceName': 'iPhone',
            //
            // NOTE: Change this version according to the Simulator Version you have created on your local machine
            'appium:platformVersion': '17.6.1',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'XCUITest',
            "appium:udid": 'xxxxxxxxxxxx',
            // The path to the app
            'appium:app': join(process.cwd(), ipaPath),
            // 'appium:app':  path.join(process.cwd(), ipaPath),
            // 'appium:newCommandTimeout': 240,
            // This is needed to wait for the webview context to become available
            // 'appium:webviewConnectTimeout': 5000
            'appium:autoGrantPermissions': true,
            // 'appium:autoAcceptAlerts': true,
            'appium:noReset': true
            // 'appium:updatedWDABundleId': "com.yape.stg.WebDriverAgentRunner"
        }
    ],
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./e2e/step-definitions/*steps.ts', './e2e/screenobjects/support/hooks.ios.ts'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> Only execute the scenarios with name matching the expression (repeatable).
        name: [],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
  
}
