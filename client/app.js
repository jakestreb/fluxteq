"use strict";

const App = require("./lib/App.js");

// php -S localhost:8000
// catw client/*/*.css -o static/bundle.css -v
// webpack --progress --colors --watch

$(function() {
  window.app = new App();
});
