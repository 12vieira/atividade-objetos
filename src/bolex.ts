import { Bola } from "./classes/bola";

const ball = new Bola("amarelo",15,"plastico");

ball.trocaCor = "vermelho";

console.log(ball.mostrarCor);