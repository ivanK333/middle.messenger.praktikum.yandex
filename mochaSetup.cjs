const { JSDOM } = require('jsdom');
const Handlebars = require('handlebars');
const fs= require('fs');

const { window } = new JSDOM('<div id="app"></div>', {
  url: 'http://localhost:5173'
});

global.window = window;
global.document = window.document;
global.DocumentFragment = window.DocumentFragment;
global.FormData = window.FormData;
global.XMLHttpRequest = window.XMLHttpRequest;

require.extensions['.hbs'] = function (module, filename) {
  const contents = fs.readFileSync(filename, 'utf-8');

  module.exports = Handlebars.compile(contents);
}

require.extensions['.pcss'] = function () {
  module.exports = () => ({});
}

require.extensions['.svg'] = function () {
  module.exports = () => ({});
}