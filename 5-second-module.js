//everytime you start a module start with a dot ( . )
const names = require('./4-first-module')
const sayHi = require('./6-Utils')
const data = require("./another-flavor")

/*
console.log (names)
$ node 5-second-module
{ john: 'saad', peter: 'peter ' }

*/

console.log(data)

sayHi('susan')

sayHi(names.john)
sayHi(names.peter)

// you can use sayHi(john) if you destructure it above const {john,peter  } = require('./4-first-module)