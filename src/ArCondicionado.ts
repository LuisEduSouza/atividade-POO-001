export class ArCondicionado {
    private material: string;
    private componentesEletronicos: string;
    private consumoEnergia: number;
    
    //constructor
    public constructor(_material: string, _componentesEletronicos: string, _consumoEnergia: number){
        this.material = _material;
        this.componentesEletronicos = _componentesEletronicos;
        this.consumoEnergia = _consumoEnergia;
    }
    //MÉTODOS GET E SET
    public getMaterial(): string {
        return this.material;
    }
    public setMaterial(_material: string): void{
        this.material = _material;
    }

    public getComponentesEletronicos(): string {
        return this.componentesEletronicos;
    }
    public setComponentesEletronicos(_componentesEletronicos: string): void{
        this.componentesEletronicos = _componentesEletronicos;
    }
    public getConsumoEnergia(): number {
        return this.consumoEnergia;
    }
    public setConsumoEnergia(_consumoEnergia : number): void{
        this.consumoEnergia = _consumoEnergia;
    }

    //MÉTODOS DIAGRAMA
    public resfriar(): void{
        console.log(`O ar condicionado está resfriando`);
    }
    public ventilar(): void{
        console.log(`O ar condicionado está ventilando o ambiente`);
    }

}