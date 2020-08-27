const minify = require('@node-minify/core');
const cleanCSS = require('@node-minify/clean-css');
 
minify({
  compressor: cleanCSS,
  input: 'src/styles/tw-style.css',
  output: 'src/styles/tw-style.min.css',
  callback: function(err, min) {}
});