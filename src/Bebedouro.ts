export class Bebedouro {
    private armazenamento: number;
    private temperaturaAgua: number;
    private material: string;
    
    //constructor
    public constructor(_armazenamento: number, _temperaturaAgua: number, _material: string){
        this.armazenamento = _armazenamento;
        this.temperaturaAgua = _temperaturaAgua;
        this.material = _material;
    }
    //MÉTODOS GET E SET
    public getArmazenamento(): number {
        return this.armazenamento;
    }
    public setArmazenamento(_armazenamento: number): void{
        this.armazenamento = _armazenamento;
    }

    public getTemperaturaAgua(): number {
        return this.temperaturaAgua;
    }
    public setTemperaturaAgua(_temperaturaAgua: number): void{
        this.temperaturaAgua = _temperaturaAgua;
    }
    public getMaterial(): string {
        return this.material;
    }
    public setMaterial(_material : string): void{
        this.material = _material;
    }

    //MÉTODOS DIAGRAMA
    public liberarAgua(): void{
        console.log(`O bebodouro está liberando água`);
    }
    public armazenarAgua(): void{
        console.log(`O bebedouro está armazenando água`);
    }
}