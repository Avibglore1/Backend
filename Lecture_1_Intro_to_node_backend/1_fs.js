const fs = require('fs');

const fileName='file.txt';
const content='content added through nodejs';
fs.writeFileSync(fileName,content);

const contentOfFile= fs.readFileSync(fileName);
console.log(contentOfFile);
console.log(content);

fs.appendFileSync(fileName,'Appending my data');

fs.mkdirSync('lecture-1');
fs.rmdirSync('lecture-1');