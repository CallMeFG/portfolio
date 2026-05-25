const fs = require('fs');
const file = 'src/assets/css/blk-design-system-react.min.css';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/url\("\.\.\/\.\.\/\.\.\/\.\.\/assets\/img\//g, 'url("../img/');
content = content.replace(/url\('\.\.\/\.\.\/\.\.\/\.\.\/assets\/img\//g, 'url(\'../img/');
content = content.replace(/url\(\.\.\/\.\.\/\.\.\/\.\.\/assets\/img\//g, 'url(../img/');

// Also fix fonts
content = content.replace(/url\("\.\.\/\.\.\/\.\.\/\.\.\/assets\/fonts\//g, 'url("../fonts/');
content = content.replace(/url\('\.\.\/\.\.\/\.\.\/\.\.\/assets\/fonts\//g, 'url(\'../fonts/');
content = content.replace(/url\(\.\.\/\.\.\/\.\.\/\.\.\/assets\/fonts\//g, 'url(../fonts/');

fs.writeFileSync(file, content);
console.log('CSS paths fixed');
