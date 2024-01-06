const fs = require('fs');
const {promisify} = require('util');
const path1 = require('path');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const unlink = promisify(fs.unlink);
const readline = require('readline');

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

function prompt(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer)=>{
            resolve(answer);
        });
    });
}

async function cleanOldFiles(path,date){
    try{
        const files= await readdir(path);
 
        const deletePromise=files.map(async(file)=>{
            const filePath= path+"/"+file;
            const fileStats=await stat(filePath);
            
            if(fileStats.isFile() && fileStats.mtime < date && path1.extname !== '.js')
            {
                console.log('Deleting file' + filePath);
                await unlink(filePath);
                console.log("Deleted " + filePath);
            }
        })
 
        await Promise.all(deletePromise);
        console.log("File Cleannup completed");
       
    }
    catch(error){
        //log error
        console.log("Error while Cleanup", error);
    }
 
}
 
async function main() {
    const directoryPath = await prompt("Enter Directory Path: ");
    const cutOffDate = await prompt("Enter Cut Off Date: ");
    cleanOldFiles(directoryPath, cutOffDate);
    rl.close();
}

main();