const sass = require('node-sass');
const fs = require('fs');
sass.render({
  file: './flone/scss/style.scss'
}, function(err, result) {
    if(err) {
      console.log(err);
      process.exit();
    }
    fs.writeFileSync('./flone/css/style.css', result.css);
    process.exit();
});