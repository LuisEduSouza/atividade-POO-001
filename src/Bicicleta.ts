export class Bicicleta {
    private rodas: string;
    private tamanho: number;
    private material: string;
    
    //constructor
    public constructor(_rodas: string, _tamanho: number, _material: string){
        this.rodas = _rodas;
        this.tamanho = _tamanho;
        this.material = _material;
    }
    //MÉTODOS GET E SET
    public getRodas(): string {
        return this.rodas;
    }
    public setRodas(_rodas: string): void{
        this.rodas = _rodas;
    }

    public getTamanho(): number {
        return this.tamanho;
    }
    public setTamanho(_tamanho: number): void{
        this.tamanho = _tamanho;
    }
    public getMaterial(): string {
        return this.material;
    }
    public setMaterial(_material : string): void{
        this.material = _material;
    }

    //MÉTODOS DIAGRAMA
    public pedalar(): void{
        console.log(`está pedalando para sua casa`);
    }
    public freiar(): void{
        console.log(`freiando para não bater no carro`);
    }

}