const os = require('os');

let currentOs = {
    name: os.type(),
    architecture: os.arch(),
    platform: os.platform(),
    release: os.release(),
    version: os.version()
}
console.log(currentOs);
console.log(os.uptime());
console.log(os.userInfo());
console.log(os.totalmem());
console.log(os.freemem());
const {model,speed} = os.cpus()[0];
console.log(model);
console.log(speed);

console.log(os.networkInterfaces());