export class Camera {
    private material: string;
    private componentesDigitais: string;
    private consumoEnergia: number;
    
    //constructor
    public constructor(_material: string, _componentesDigitais: string, _consumoEnergia: number){
        this.material = _material;
        this.componentesDigitais = _componentesDigitais;
        this.consumoEnergia = _consumoEnergia;
    }
    //MÉTODOS GET E SET
    public getMaterial(): string {
        return this.material;
    }
    public setMaterial(_material: string): void{
        this.material = _material;
    }

    public getComponentesDigitais(): string {
        return this.componentesDigitais;
    }
    public setComponentesDigitais(_componentesDigitais: string): void{
        this.componentesDigitais = _componentesDigitais;
    }
    public getConsumoEnergia(): number {
        return this.consumoEnergia;
    }
    public setConsumoEnergia(_consumoEnergia : number): void{
        this.consumoEnergia = _consumoEnergia;
    }

    //MÉTODOS DIAGRAMA
    public capturaImagem(): void{
        console.log(`A imagem da câmera está sendo capturada`);
    }
    public capturaAudio(): void{
        console.log(`O aúdio foi capturado pela câmera`);
    }

}