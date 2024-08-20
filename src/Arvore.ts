export class Arvore {
    private folhagem: string;
    private tamanho: number;
    private cor: string;
    
    //constructor
    public constructor(_cor: string, _tamanho: number, _folhagem: string){
        this.folhagem = _folhagem;
        this.tamanho = _tamanho;
        this.cor = _cor;
    }
    //MÉTODOS GET E SET
    public getFolhagem(): string {
        return this.folhagem;
    }
    public setFolhagem(_folhagem : string): void{
        this.folhagem = _folhagem;
    }
    public getTamanho(): number {
        return this.tamanho;
    }
    public setTamanho(_tamanho: number): void{
        this.tamanho = _tamanho;
    }
    public getCor(): string {
        return this.cor;
    }
    public setCor(_cor: string): void{
        this.cor = _cor;
    }

    //MÉTODOS DIAGRAMA
    public liberarOxigenio(): void{
        console.log(`A árvore está liberando oxigênio`);
    }
    public produzirFrutos(): void{
        console.log(`A árvore está produzindo frutos`);
    }

}