const BINPATH = './node_modules/nightwatch/bin/';
const RUN_BDD = process.env.RUN_BDD;

// Basically, this single require clause defines if we run native or BDD tests
if (RUN_BDD) {
  require('nightwatch-cucumber')({
    nightwatchClientAsParameter: true
  });
}


module.exports = {
  "src_folders": RUN_BDD ? [] : ['./test'], // Where you are storing your native Nightwatch e2e tests
  "page_objects_path": "./pages",
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

    // default browser options
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

    // jenkins browsers
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
};
