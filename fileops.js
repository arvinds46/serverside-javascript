const readline = require('readline');
const fs= require('fs');

const r1 = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

function prompt(question) {
    return new Promise((resolve) => {
        r1.question(question, (answer)=>{
            resolve(answer);
        });
    });
}
async function main() {
    const operation = await prompt("Please choose operation (READ, WRITE, COPY, LIST, CREATE, REMOVE): ");
    switch(operation) {
        case "READ":
            const file = await prompt("Enter File Name: ");
            readfile(file);
            break;
        case "WRITE":
            const file1 = await prompt("Enter File Name: ");
            const message = await prompt("Enter Message: ");
            writefile(file1, message);
            break;
        case "COPY":
            const source = await prompt("Enter Source Name: ");
            const destination = await prompt("Enter Destination Name: ");
            copyfile(source, destination);
            break;
        case "LIST":
            const path = await prompt("Enter Path to List Files: ");
            listfiles(path);
            break;
        default:
            break;
    }
    r1.close();
}

async function readfile(file) {
    fs.readFile(file, (err, data)=>{
        if(err){
            console.log("File doesn't exist", err);
        }else{
            console.log("Read File Contents:");
            console.log(data.toString());
        }
    });
}

async function writefile(file, message) {
    fs.writeFile(file,message,(err)=>{
        if(err){
            console.log("Error writing into file",err);
        }else{
            console.log("Data Written Successfully..");
        }
    });
}

async function copyfile(source, destination) {
    fs.readFile(source, (err, data)=>{
        if(err){
            console.log("File doesn't exist", err);
        }else{
            fs.writeFile(destination,data,(err)=>{
                if(err){
                    console.log("Error copying file",err);
                }else{
                    console.log("Data Copied Successfully..");
                }
            });
        }
    });
}

async function listfiles(path) {
    fs.readdir(path, (err, files)=>{
        if(err){
            console.log("Files List not found", err);
        }else{
            console.log("Reading Files List:");
            console.log(files);
        }
    });
}

main();