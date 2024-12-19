import { Retangulo } from "./classes/retangulo";

const ret = new Retangulo(3,4)

console.log(ret.retornarLados)

ret.mudarLados(5,6);

console.log(ret.retornarLados)

console.log(ret.calcularArea());
console.log(ret.calcularPerimetro());