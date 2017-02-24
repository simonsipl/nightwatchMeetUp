module.exports = function() {

  this.Given(/^I open Google's search page$/, (client) => {
    client
      .url('http://google.com')
      .waitForElementVisible('body', 1000)
  })



  this.Then(/^the Google search form exists$/, (client) => {
    client.assert.visible('input[name="q"]')
  })


  // Standardowy przykład
  // this.Then(/^the title is "([^"]*)"$/, (client, title) => {
  //   client.assert.title(title)
  // })
  // Przykład ze zmienną
  // this.Then('the title is "$title"', (client, title) => {
  //   client.assert.title(title)
  // })
  //
  // //Przykład funkcyjny - reużywalny
  const getTitle = function(client, title) {
    client.assert.title(title)
  };

  this.Then('the title is "$title"' ,getTitle);
}
