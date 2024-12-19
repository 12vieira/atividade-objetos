import { Pessoa } from "./classes/pessoa";

const person = new Pessoa("jorge",51,80,180);

console.log(person.crescer(5));

person.engordar(7);

person._idade = 12;
console.log(person)
console.log(person.envelhecer(3))

