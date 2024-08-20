import { Espada } from './Espada';

const espada1 : Espada = new Espada (25, 'Afiada', 'Metal'); 

console.log(espada1.getTamanho());
console.log(espada1.getLamina());
console.log(espada1.getMaterial());
espada1.atacar();
espada1.defesa();
