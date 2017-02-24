var BINPATH = './node_modules/nightwatch/bin/';
//comment if you want to run native Nightwatch
 require('nightwatch-cucumber')({
   nightwatchClientAsParameter: true,
   /* other configuration options */
 })

module.exports = {
  "src_folders": [
    //"test"// Where you are storing your Native Nightwatch e2e tests
  ],
  "page_objects_path": "pages/",
  "output_folder": "./reports", // reports (test outcome) output by nightwatch

  "selenium": { // downloaded by selenium-download module (see readme)
    "start_process": true, // tells nightwatch to start/stop the selenium process
    "server_path": BINPATH + "selenium.jar",
    "host": "127.0.0.1",
    "port": 4444, // standard selenium port
    "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
      "webdriver.chrome.driver": BINPATH + "chromedriver"
    }
  },

  "test_settings": {
    "default": {
      "screenshots": {
        "enabled": true, // if you want to keep screenshots
        "path": './screenshots' // save screenshots here
      },
      "globals": {
        "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
      },
      "desiredCapabilities": { // use Chrome as the default browser for tests
        "browserName": "chrome"
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true // turn off to test progressive enhancement
      }
    },
    "jenkins-chrome": {
      "selenium_host": "selenium_hub",
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "jenkins-firefox": {
      "selenium_host": "selenium_hub",
      "desiredCapabilities": {
        "browserName": "firefox",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}
