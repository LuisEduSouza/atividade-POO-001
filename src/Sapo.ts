//Luís
export class Sapo {
    private cor: string;
    private tamanho: number;
    private especie: string;
    
    //constructor
    public constructor(_cor: string, _tamanho: number, _especie: string){
        this.cor = _cor;
        this.tamanho = _tamanho;
        this.especie = _especie;
    }
    //MÉTODOS GET E SET
    public getCor(): string {
        return this.cor;
    }
    public setCor(_cor: string): void{
        this.cor = _cor;
    }

    public getTamanho(): number {
        return this.tamanho;
    }
    public setTamanho(_tamanho: number): void{
        this.tamanho = _tamanho;
    }
    public getEspecie(): string {
        return this.especie;
    }
    public setEspecie(_especie : string): void{
        this.especie = _especie;
    }

    //MÉTODOS DIAGRAMA
    public pulo(): void{
        console.log(`${this.especie} está pulando`);
    }
    public esticarLingua(): void{
        console.log(`${this.especie} está esticando a língua`);
    }

}