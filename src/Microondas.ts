export class Microondas{

    private potencia: number;
    private capacidade: number;
    private marca: string;
   
    public constructor(_potencia: number, _capacidade: number, _marca: string){
        this.potencia= _potencia;
        this.capacidade = _capacidade;
        this.marca = _marca;
    }

    public getPotencia(): number{
        return this.potencia;
    }

    public setPotencia (_potencia: number):void{
        this.potencia= _potencia;
    }

    public getCapacidade(): number{
        return this.capacidade;
    }
    public setCapacidade (_capacidade: number):void{
        this.capacidade = _capacidade;
    }

    public getMarca(): string{
        return this.marca;
    }

    public setMarca (_marca: string):void{
        this.marca = _marca;
    }
    public aquecer(): void{
        console.log(`O microondas está aquecendo`);
    }
    public manterTemperatura(): void{
        console.log(`O microondas está mantendo sua temperatura`);
    }

}
