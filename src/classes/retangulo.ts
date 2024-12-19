export class Retangulo{
    constructor(
        private _ladoA: number,
        private _ladoB: number
    ){}

    public get retornarLados(){
        return {ladoA: this._ladoA, ladoB: this._ladoB}
    }
    public mudarLados(ladoA: number, ladoB: number){
        this._ladoA = ladoA;
        this._ladoB = ladoB;
    }
    public calcularArea(): number{
        return this._ladoA * this._ladoB
    }
    public calcularPerimetro(): number{
        return (2*(this._ladoA + this._ladoB));
    }
}