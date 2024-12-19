import { Quadrado } from "./classes/quadrado";

const square = new Quadrado(3)
//const area = square.calcularArea;
console.log(square.retornarValor)
console.log(square.calcularArea(square.retornarValor))

square.mudarLado = 5;

console.log(square.retornarValor)
console.log(square.calcularArea(square.retornarValor))