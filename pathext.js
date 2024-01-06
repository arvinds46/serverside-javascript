const path = require('path');
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

async function main() {
    const basepath = await prompt("Enter Base Path: ");
    const filename = await prompt("Enter File Name: ");
    const filepath = await createFilePath(basepath, filename);
    console.log('Complete Path is ' + filepath);

    const extension = await extractFileExtension(filepath);
    console.log('File Extension is ' + extension);

    const absolute = await isAbsolutePath(filepath);
    console.log('Path is Absolute or Not: ' + absolute);
 
    const path1 = await prompt("Enter Path1: ");
    const path2 = await prompt("Enter Path2: ");
    const joinpath = await joinPath(path1, path2);
    console.log('Joined Path: ' + joinpath);

    const path3 = await prompt("Enter Path to Normalize: ");
    const normalize = await normalizePath(path3);
    console.log('Normalized Path: ' + normalize);

    rl.close();
}

async function createFilePath(basepath, filename) {
    return path.format({
        dir: basepath,
        base: filename
    });
}

async function extractFileExtension(filepath) {
    return path.extname(filepath);
}

async function isAbsolutePath(filepath) {
    return path.isAbsolute(filepath) ? 'Absolute Path' : 'Relative Path';
}

async function joinPath(path1, path2) {
    return path.join(path1, path2);
}

async function normalizePath(path3) {
    return path.normalize(path3);
}

main();