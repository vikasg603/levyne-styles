const sass = require('node-sass');
const fs = require('fs');
sass.render({
  file: '/Users/vikas/Documents/LevyneComplete/levyne-styles/flone/scss/style.scss'
}, function(err, result) {
    fs.writeFileSync('./style.css', result.css);
});