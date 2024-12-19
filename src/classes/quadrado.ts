export class Quadrado{
    constructor(
        private _tamanhoLado: number,
    ){}

    public get retornarValor(): number{
        return this._tamanhoLado;
    }
    public set mudarLado(lado: number){
        this._tamanhoLado = lado;
    }
    public calcularArea(lado: number){
        return lado * lado;
    }

}