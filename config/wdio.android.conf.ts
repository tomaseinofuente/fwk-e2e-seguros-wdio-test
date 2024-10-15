import path from 'path'
import type { Options } from '@wdio/types'
import { config as baseConfig } from './wdio.conf.ts';
import AppConfig from "../e2e/screenobjects/support/app.config.ts";

let appConfig = new AppConfig(process.env.ENV || "stg");

let apkPath = appConfig.getAppPaths()[0].pathApk;

export const config: Options.Testrunner = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    // '../e2e/features/android/**/soat-cotizar-MNK0001-iralawebdepacifico.feature',
    // '../e2e/features/android/**/soat-cotizar-MNK0001-validarplaca.feature'
    // '../e2e/features/android/**/soat-cotizar-PGA0002.feature'
    specs: [
        // '../e2e/features/android/spt/detalledetuseguro/*.feature'
        // '../e2e/features/spt/happy/menu/*.feature'
        '../e2e/features/soat/happy/winstate/*.feature'
        // '../e2e/features/spt/happy/comprar/*.feature'
        // '../e2e/features/spt/happy/deeplinks/*.feature'

    ],

    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
    capabilities: [
        // {
        //     // capabilities for local Appium web tests on an Android Emulator
        //     platformName: 'Android',
        //     'appium:deviceName': 'Pixel 6 Pro API 34',
        //     'appium:platformVersion': '14.0',
        //     'appium:automationName': 'UiAutomator2',
        //     'appium:app': path.join(process.cwd(), apkPath),
        //     'appium:autoGrantPermissions': true,
        //     // 'appium:autoAcceptAlerts': true,
        //     'appium:noReset': true
        // },
        {
            // capabilities for local Appium web tests on an Android Emulator
            'appium:deviceName': 'Pixel 8 Pro API 33',
            platformName: 'Android',
            'appium:platformVersion': '13.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app': path.join(process.cwd(), apkPath),
            'appium:autoGrantPermissions': true,
            // 'appium:autoAcceptAlerts': true,
            'appium:noReset': true
        }
    ],
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./e2e/step-definitions/*steps.ts', './e2e/screenobjects/support/hooks.android.ts'],
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
