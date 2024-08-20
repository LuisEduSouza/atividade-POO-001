export class Televisao {
    private configuracaoImagem: string;
    private polegadas: number;
    private marca: string;
    
    //constructor
    public constructor(_configuracaoImagem: string, _polegadas: number, _marca: string){
        this.configuracaoImagem = _configuracaoImagem;
        this.polegadas = _polegadas;
        this.marca = _marca;
    }
    //MÉTODOS GET E SET
    public getConfiguracaoImagem(): string {
        return this.configuracaoImagem;
    }
    public setConfiguracaoImagem(_configuracaoImagem: string): void{
        this.configuracaoImagem = _configuracaoImagem;
    }

    public getPolegadas(): number {
        return this.polegadas;
    }
    public setPolegadas(_polegadas: number): void{
        this.polegadas = _polegadas;
    }
    public getMarca(): string {
        return this.marca;
    }
    public setMarca(_marca : string): void{
        this.marca = _marca;
    }

    //MÉTODOS DIAGRAMA
    public transmitirImagem(): void{
        console.log(`A TV está transmitindo um filme`);
    }
    public transmitirVolume(): void{
        console.log(`O volume está sendo transmitindo`);
    }

}