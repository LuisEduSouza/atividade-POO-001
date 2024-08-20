export class Navio {
    private material: string;
    private carga: string;
    private peso: number;
    
    //constructor
    public constructor(_material: string, _carga: string, _peso: number){
        this.material = _material;
        this.carga = _carga;
        this.peso = _peso;
    }
    //MÉTODOS GET E SET
    public getMaterial(): string {
        return this.material;
    }
    public setCor(_material: string): void{
        this.material = _material;
    }

    public getCarga(): string {
        return this.carga;
    }
    public setCarga(_carga: string): void{
        this.carga = _carga;
    }
    public getPeso(): number {
        return this.peso;
    }
    public setPeso(_peso:number): void{
        this.peso = _peso;
    }

    //MÉTODOS DIAGRAMA
    public transportar(): void{
        console.log(`O navio está transportando a ${this.carga}`);
    }
    public locomover(): void{
        console.log(`O navio está está se locomovendo`);
    }

}