module.exports = function () {

  this.Given("I open Google's search page", (client) => {
    client
      .url('http://google.com')
      .waitForElementVisible('body', 1000) // optional timeout
  });

  this.Then('the Google search form exists', (client) => {
    const google = client.page.google();
    google.assert.visible('@searchInput')
  });


  /*
   reusable example
   */
  const getTitle = function (client, title) {
    client.assert.title(title)
  };

  // this way we can declare more steps that act the same way yet having different step definition
  // in this case it doesn't make much sense but you get the idea :)
  this.Then('the title is "$title"', getTitle);
  this.Then('the browser title is "$title"', getTitle);
};
