function add(num1,num2) {
    return num1+num2;
}
function sub(num1,num2) {
    return num1-num2;
}
function mul(num1,num2) {
    return num1*num2;
}
function div(num1,num2) {
    return num1/num2;
}
function square(num) {
    return num*num;
}
function cube(num) {
    return num*num*num;
}

module.exports = {add,sub,mul,div,square,cube};

module.exports.myTest = function() {
    console.log("Test function called");
}