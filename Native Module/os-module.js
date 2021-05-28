const os = require('os')

//you can get a usefule info about the current user

const user = os.userInfo()

console.log(user)

//or methods to return the system uptime in seconds

console.log(`system uptime ${os.uptime()} seconds`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}

console.log(currentOS)