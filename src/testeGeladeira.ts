import { Geladeira } from './Geladeira';

//INSTANCIAR (CRIAR OBJETO)
const geladeira1 : Geladeira = new Geladeira (400, 13, 30); 

console.log(geladeira1.getCapacidade());
console.log(geladeira1.getTemperatura());
console.log(geladeira1.getConsumoEnergia());
geladeira1.manterTemperatura();
geladeira1.controlarTemperatura();