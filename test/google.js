// Using nightwatch with vanilla features (no Page Object)

module.exports = {
  'Google: vanilla test': function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 4000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]')
      .click('button[name=btnG]')

      // let's wait for the list with results!
      .waitForElementVisible('#res .g:first-child h3.r', 5000)

      .assert.containsText('#main', 'Nightwatch')
      .end();
  },
};
