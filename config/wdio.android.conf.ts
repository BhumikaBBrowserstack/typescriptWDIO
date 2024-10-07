// import { join } from 'path';
// import config from '../config/wdio.shared.local.conf';

// ============
// Specs
// ============
// config.specs = [
//     '../tests/specs/*.ts',
// ];

// ============
// Capabilities
// ============
// config.capabilities = [
//     {
//         // The defaults you need to have in your config
//         platformName: 'Android',
//         maxInstances: 1,
//         'appium:deviceName': 'Pixel_XL_API_33',
//         'appium:platformVersion': '13.0',
//         'appium:orientation': 'PORTRAIT',
//         'appium:automationName': 'UiAutomator2',
//         // The path to the app
//         'appium:app': join(process.cwd(), './apps/Android-NativeDemoApp-0.4.0.apk'),
//         // @ts-ignore
//         'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
//         'appium:noReset': false,
//         'appium:newCommandTimeout': 240,
//     },
// ];
exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'bs://e48cc10bcc817a7ba6c77a963fc2fa40adebff7c',
          buildIdentifier: "${BUILD_NUMBER}",
          browserstackLocal: false,
          testObservability: false,
          percy: false,
          percyCaptureMode: 'auto'
        },
      ]
    ],
    capabilities: [{
      'bstack:options': {
        deviceName: 'Samsung Galaxy S22',
        platformVersion: '12.0',
        platformName: 'android',
      }
    }, {
      'bstack:options': {
        deviceName: 'Google Pixel 7 Pro',
        platformVersion: '13.0',
        platformName: 'android',
      } }, {
      'bstack:options': {
        deviceName: 'OnePlus 9',
        platformVersion: '11.0',
        platformName: 'android',
      }
    }],
    commonCapabilities: {
      'bstack:options': {
        projectName: "BrowserStack Sample",
        buildName: "bstack-wdio-ts",
        debug: true,
        networkLogs: true
      }
    },
    maxInstances: 10,
}

// specs:[
//     '../tests/specs/*.ts',
// ];
// exports.config= config;
