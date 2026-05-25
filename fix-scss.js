const fs = require('fs');
const file = 'src/assets/scss/blk-design-system-react/custom/_variables.scss';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/theme-color\("primary"\)/g, '$primary')
                 .replace(/theme-color\("success"\)/g, '$success')
                 .replace(/theme-color\("warning"\)/g, '$warning')
                 .replace(/theme-color\("info"\)/g, '$info')
                 .replace(/theme-color\("danger"\)/g, '$danger');
fs.writeFileSync(file, content);
console.log('Variables fixed');
