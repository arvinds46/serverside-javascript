const path = require('path');

console.log(__dirname+"\\data.txt");

let path1 = path.basename('/www/home/index.html');
console.log(path1);

let file = path.basename('/www/home/index.html','.html');
console.log(file);

console.log(path.dirname('/www/home/index.html'));

let path2 = path.format({
    dir:'www\\home\\js',
    base:'index.js'
});
console.log(path2);