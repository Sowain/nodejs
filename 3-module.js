//commonJS, every file in Node is a module (by default)
//Modules - Encapsulated code ( only share minimum)

const secret = 'SUPER SECRET'
const john = "saad";
const peter = "peter ";

const sayHI = (name) => {
  console.log(`hello there ${name}`);
};

sayHI(john);
