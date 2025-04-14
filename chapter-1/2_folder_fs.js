const arr=[
    'Intro to nodejs',
    "Intro to Express and postman",
    "Mongodb and mongoose", "MVC architecture and REST API", "Data validation and hooks in mongoose"
]

const fs = require('fs')
const path = require('path');

for(let i=0;i<arr.length;i++){
    fs.mkdirSync(arr[i], {recursive:true});
    let filePath = path.join(arr[i],'readme.md');
    fs.writeFileSync(filePath,'content');
}
