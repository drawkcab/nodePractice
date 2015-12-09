var person = {};

person.firstName = 'Matt';
person.lastName = 'Roche';

function greetUser (person) {
  console.log('Hello '+ person.firstName + ' ' + person.lastName);
}

greetUser(person);
