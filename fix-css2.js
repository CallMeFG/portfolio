const fs = require('fs');
const file = 'src/assets/css/blk-design-system-react.min.css';
let content = fs.readFileSync(file, 'utf8');

// Fix the syntax error that Next.js PostCSS parser complains about
content = content.replace(/\.bootstrap-datetimepicker-widget table td\.active\.today:before > div {/g, '.bootstrap-datetimepicker-widget table td.active.today:before {');

fs.writeFileSync(file, content);
console.log('CSS syntax fixed');
