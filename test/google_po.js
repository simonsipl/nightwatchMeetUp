// Using nightwatch with Page Object Model

module.exports = {
  'Google: Page Object test': function (client) {
    const google = client.page.google();

    google.navigate()
          .waitForElementVisible('body', 4000)
          .assert.title('Google')
          .assert.visible('@searchInput')
          .setValue('@searchInput', 'nightwatch')
          .click('@submitBtn');
    client.end();
  }
};
