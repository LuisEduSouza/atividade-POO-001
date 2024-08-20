export class Impressora3D {
    private volume: number;
    private marca: string;
    private resolucao: number;
    
    //constructor
    public constructor(_volume: number, _marca: string, _resolucao: number){
        this.volume = _volume;
        this.marca = _marca;
        this.resolucao = _resolucao;
    }
    //MÉTODOS GET E SET
    public getVolume(): number {
        return this.volume;
    }
    public setVolume(_volume: number): void{
        this.volume = _volume;
    }

    public getMarca(): string {
        return this.marca;
    }
    public setMarca(_marca: string): void{
        this.marca = _marca;
    }
    public getResolucao(): number {
        return this.resolucao;
    }
    public setResolucao(_resolucao : number): void{
        this.resolucao = _resolucao;
    }

    //MÉTODOS DIAGRAMA
    public imprimir(): void{
        console.log(`A impressora da marca ${this.marca} está imprimindo`);
    }
    public pausarImpressao(): void{
        console.log(`A impressão está pausada`);
    }
}