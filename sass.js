const sass = require('node-sass');
const fs = require('fs');
sass.render({
  file: '/Users/vikas/Documents/LevyneComplete/levyne-styles/flone/scss/style.scss'
}, function(err, result) {
    if(err) {
      console.log(err);
      process.exit();
    }
    fs.writeFileSync('./style.css', result.css);
    process.exit();
});