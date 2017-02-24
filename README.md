# QA Starter NightWatchJS

A starter for automated tests using Nightwatch framework


## Before work

Make sure you have `node` package installed - at least v4.


## Installation

1. Clone or fork repository

2. Install required packages
    ```sh
    $ cd my-project
    $ npm install 
    ```

    (Under the hood, all required packages are installed and after that a script is run to install selenium and chromedriver binaries)

3. You're ready to run!
    ```sh
    $ npm run test
    ```


## Directories 	
 - `features` - Gherkin tests and steps
 - `test` - spec files for 'native' nightwatch tests
 - `pages` - _page objects_ used in tests


## Reporting

Nightwatch generates reports in the `reports` folder. If any tests fails, a screenshot will be generated inside the `screenshots` dir.


## Help

Fore more questions please contact Stanisz Szymon.
