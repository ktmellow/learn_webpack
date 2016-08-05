function sayHello(){
  return `Hello`;
}

const info = {
  firstName: 'Elie',
  lastName: 'Schoppik',
  job: 'Instructor',
  sayHi(){
    return `Hi ${this.firstName} ${this.lastName}!`
  }
}

let meaningOfLife = 42;
const foo = 'bar';


export default foo // send this off as the default value
export {info,sayHello,meaningOfLife} // send this off to another module
