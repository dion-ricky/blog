const minify = require('@node-minify/core');
const cleanCSS = require('@node-minify/clean-css');
 
minify({
  compressor: cleanCSS,
  input: 'dist/styles/tw-style.css',
  output: 'dist/styles/tw-style.min.css',
  callback: function(err, min) {}
});