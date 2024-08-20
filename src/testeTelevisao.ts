import { Televisao } from './Televisao';

//INSTANCIAR (CRIAR OBJETO)
const tv1 : Televisao = new Televisao ('4K', 75, 'LG'); 

console.log(tv1.getConfiguracaoImagem());
console.log(tv1.getPolegadas());
console.log(tv1.getMarca());
tv1.transmitirImagem();
tv1.transmitirVolume();