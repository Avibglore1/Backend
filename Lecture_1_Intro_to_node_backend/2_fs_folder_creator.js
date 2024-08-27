const fs = require('fs');
    const lectureNames = ['Into to backend with nodeJS',
     'Intro to Express and Postman','Mongodb and mongoose',
     'MVC architecture and REST API','Data validation and hooks in mongoose'];

     for(let i=0;i<lectureNames.length;i++){
        let currentfolderName=`Lecture-${i+1}-${lectureNames[i]}`;
        fs.mkdirSync(currentfolderName);
        let filePath = `${currentfolderName}/readme.md`;
        fs.writeFileSync(filePath,'#Agenda');
        console.log('created folder: ', currentfolderName);
     }

    