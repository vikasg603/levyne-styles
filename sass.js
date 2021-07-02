const sass = require('node-sass');
const fs = require('fs');
const importOnce = require('node-sass-import-once');
sass.render({
  file: './flone/scss/style.scss',
  importer: importOnce,
  importOnce: {
    index: false,
    css: false,
    bower: false
  }
}, function(err, result) {
    if(err) {
      console.log(err);
      process.exit();
    }
    fs.writeFileSync('./flone/css/style.css', result.css);
    process.exit();
});