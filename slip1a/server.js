const fs=require('fs');
const file1 = './file1.txt';
const file2 = './file2.txt';
fs.readFile(file1,'utf-8',(err,data) =>
{
    if (err)
        throw err;
    
        fs.appendFile(file2,data,'utf-8',(err,data) =>
        {
            if(err)
                throw err;
            console.log("Data appended successfully!")
        });

});