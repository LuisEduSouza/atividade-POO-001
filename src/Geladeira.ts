export class Geladeira {
    private capacidade: number;
    private temperatura: number;
    private consumoEnergia: number;
    
    //constructor
    public constructor(_capacidade: number, _temperatura: number, _consumoEnergia: number){
        this.capacidade = _capacidade;
        this.temperatura = _temperatura;
        this.consumoEnergia = _consumoEnergia;
    }
    //MÉTODOS GET E SET
    public getCapacidade(): number {
        return this.capacidade;
    }
    public setCapacidade(_capacidade: number): void{
        this.capacidade = _capacidade;
    }

    public getTemperatura(): number {
        return this.temperatura;
    }
    public setTemperatura(_temperatura: number): void{
        this.temperatura = _temperatura;
    }
    public getConsumoEnergia(): number {
        return this.consumoEnergia;
    }
    public setConsumoEnergia(_consumoEnergia : number): void{
        this.consumoEnergia = _consumoEnergia;
    }

    //MÉTODOS DIAGRAMA
    public manterTemperatura(): void{
        console.log(`A geladeira está mantendo a temperatura`);
    }
    public controlarTemperatura(): void{
        console.log(`A geladeira está controlando a temperatura`);
    }

}