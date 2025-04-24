const fs = require('fs');
const fsPromises = require('fs').promises;
const uuid = require('uuid');
const path = require('path');
const {format} = require('date-fns'); 

fs.readFile('filesystem/1.txt',(err,data) => {
    if(err) throw err;
    console.log(data.toString());
})
fs.writeFile('filesystem/2.txt','console.log("this.is the writed file")',(err)=> {
    if(err) throw err;
    fs.readFile('filesystem/2.txt',(err,data)=> {
        if(err) throw err;
        console.log(data.toString());
    })
})
fs.appendFile("filesystem/3.txt","this is the appended file",(err)=> {
    if(err) throw err;
})

const fileOps = async () => {
    try { 
        let data =  await fsPromises.readFile(file_1,'utf-8');
        console.log(data.toString());
        await fsPromises.appendFile(file_1," new content",'utf-8',data);
    }
    catch (error) { 
        console.error(error);
    }
}
fileOps();
fs.mkdir("./new",(err)=> {
    if(err) throw err;
    fsPromises.writeFile("new/index.html","Hello world","utf-8",(err)=> {
        if(err) throw err;
        else {
            console.log("operation completed successfully");
        }
    })
})


// if(fs.existsSync("./new")) {
//     console.log("Already exists");
// }else if (!fs.existsSync("./new")) {
// console.log("You have to create file");
// }

