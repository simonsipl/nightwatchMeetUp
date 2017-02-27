//PageObject for google.js spec

module.exports = {
  url: 'http://google.com',
  elements: {
    searchInput: {
      selector: 'input[name=q]'
    },
    submitBtn: {
      selector: './/*[@id="tsf"]/div[2]/div[3]/center/input[1]',
      locateStrategy: 'xpath'
    }
  }
};
