//PageObject for google.js spec

module.exports = {
  url: function() {
    return 'http://www.google.pl';
  },
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
