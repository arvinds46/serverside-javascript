var users = [];

function register(name, username, email, password) {
    var user = {};
    user["name"] = name;
    user["username"] = username;
    user["email"] = email;
    user["password"] = password;
    let email1 = users.find(o => o.email === email);
    if (email1 != undefined) {
        if (email == email1.email) {
            return "Email already registered";
        }
    }
    else {
        users.push(user);
        return "Register Successful";
    }
}

function login(email, password) {
    let user = users.find(o => o.email === email);
    if (password == user.password) {
        return "Login Successful";
    }
    else {
        return "Invalid credentials";
    }
}

function changepassword(email, currentpassword, password) {
    let user = users.find(o => o.email === email);
    if (user && currentpassword == user.password) {
        user.password = password;
        return "Password changed";
       /* let obj = users.find((o, i) => {
            if (o.email === email) {
                users[i] = { password: password };
                return true; // stop searching
            }
        });*/
    }
    else {
        return "Email Not Registered";
    }
}

function logout() {
    return "Logged Out Successfully";
}

module.exports = {register, login, changepassword, logout};