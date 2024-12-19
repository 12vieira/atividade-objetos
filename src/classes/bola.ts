export class Bola{
    constructor(
        private _cor: string,
        private _circunferencia: number,
        private _material: string
    ){}

public set trocaCor(cor: string){
    this._cor = cor;
}
public get mostrarCor(): string{
    return this._cor;
}

}