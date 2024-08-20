export class Triturador{

    private material: string;
    private lamina: string;
    private motor: string;
   
    public constructor(_material: string, _lamina: string, _motor: string){
        this.material= _material;
        this.lamina = _lamina;
        this.motor = _motor;
    }

    public getMaterial(): string{
        return this.material;
    }

    public setMaterial (_material: string):void{
        this.motor= _material;
    }

    public getLamina(): string{
        return this.lamina;
    }
    public setLamina (_lamina: string):void{
        this.lamina = _lamina;
    }

    public getMotor(): string{
        return this.motor;
    }

    public setMotor (_motor: string):void{
        this.material = _motor;
    }
    public triturar(): void{
        console.log(`O triturador está triturando`);
    }
    public ligar(): void{
        console.log(`O tritutador está ligado`);
    }
}
