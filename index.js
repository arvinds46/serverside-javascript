const {register, login, changepassword, logout} = require("./userauth");
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
    const name = await prompt("Enter Name: ");
    const username = await prompt("Enter User Name: ");
    const email = await prompt("Enter Email: ");
    const password = await prompt("Enter Password: ");
    const resp = register(name, username, email, password);
    console.log(resp);

    const emailid = await prompt("Enter Email: ");
    const pwd = await prompt("Enter Password: ");
    const data = login(emailid, pwd);
    console.log(data);

    const emailId = await prompt("Enter Email: ");
    const currpwd = await prompt("Enter Current Password: ");
    const newpwd = await prompt("Enter New Password: ");
    const newpassword = changepassword(emailId, currpwd, newpwd);
    console.log(newpassword);

    console.log(logout());
}

main();