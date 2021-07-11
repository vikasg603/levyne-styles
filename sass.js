const sass = require('node-sass');
const fs = require('fs');
const importOnce = require('node-sass-import-once');
sass.render({
  file: './fashion/scss/style.scss',
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
    fs.writeFileSync('./fashion/css/style.css', result.css);
    process.exit();
});