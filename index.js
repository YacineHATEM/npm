const cowsay = require('cowsay');
const newPerson = require ('./information');
let student = newPerson.person;

console.log(cowsay.say({
    text: `Hello,i am ${student.name} from ${student.campus}`,
    e: "oO",
    T: "U "
}));
