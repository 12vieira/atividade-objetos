export class Pessoa{
    constructor(
        private _nome: string,
        public _idade: number,
        private _peso: number,
        private _altura: number
    ){}
    public crescer(altura: number){
        return this._altura += altura;
    }
    public emagrecer(peso: number){
        return this._peso -= peso; 
    }
    public engordar(peso: number){
        return this._peso += peso;
    }
    public envelhecer(idade: number){
        if(idade<21){
            return this._altura += (idade*0.5)
        }
        return this._idade += idade;
    }
}