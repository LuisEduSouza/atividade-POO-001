import { Microondas } from './Microondas';

const microondas1 : Microondas = new Microondas (25, 22, `Midea` ); 

console.log(microondas1.getPotencia());
console.log(microondas1.getCapacidade());
console.log(microondas1.getMarca());
microondas1.aquecer();
microondas1.manterTemperatura();
