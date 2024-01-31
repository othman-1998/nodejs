const os = require('os');

// info about current user/you
const user = os.userInfo();

// method returns the system uptime in seconds
// console.log(user);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);