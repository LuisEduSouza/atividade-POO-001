export class Esmalte {
    private cor: string;
    private embalagem: string;
    private quantidade: number;
    
    //constructor
    public constructor(_cor: string, _embalagem: string, _quantidade: number){
        this.cor = _cor;
        this.embalagem = _embalagem;
        this.quantidade = _quantidade;
    }
    //MÉTODOS GET E SET
    public getCor(): string {
        return this.cor;
    }
    public setCor(_cor: string): void{
        this.cor = _cor;
    }

    public getEmbalagem(): string {
        return this.embalagem;
    }
    public setEmbalagem(_embalagem: string): void{
        this.embalagem = _embalagem;
    }
    public getQuantidade(): number {
        return this.quantidade;
    }
    public setSaldo(_quantidade : number): void{
        this.quantidade = _quantidade;
    }

    //MÉTODOS DIAGRAMA
    public pintar(): void{
        console.log(`O esmalte da cor ${this.cor} está sendo pintado`);
    }
    public protecao(): void{
        console.log(`O esmalte da cor ${this.cor} está protegendo sua unha`);
    }

}