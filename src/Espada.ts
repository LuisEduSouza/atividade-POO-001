export class Espada{
    
        private tamanho: number;
        private lamina: string;
        private material: string;
       
        public constructor(_tamanho: number, _lamina: string, _material: string){
            this.tamanho = _tamanho;
            this.lamina = _lamina;
            this.material = _material;
        }

        public getTamanho(): number{
            return this.tamanho;
        }
    
        public setTamanho (_tamanho: number):void{
            this.tamanho= _tamanho;
        }
        public getLamina(): string{
            return this.lamina;
        }
    
        public setLamina (_lamina: string):void{
            this.lamina = _lamina;
        }

        public getMaterial(): string{
            return this.material;
        }
    
        public setMaterial (_material: string):void{
            this.material = _material;
        }
    
        public atacar(): void{
            console.log(`A espada está atacando`);
        }
        public defesa(): void{
            console.log(`A espada está defendendo`);
        }
}