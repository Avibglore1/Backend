const fs = require('fs');
let fileName = 'file.txt';
let content = "Agenda";
fs.writeFileSync(fileName,content);

const Content = fs.readFileSync(fileName,'utf-8');
console.log('Content:',Content);

fs.appendFileSync(fileName,'Appending new text in it');

const readContent = fs.readFileSync(fileName,'utf-8');
console.log("Appended text:",readContent);

// there is no nodejs command to write text at beginning u need to creat a variable and then use writeFileSync