import { Camera } from './Camera';

//INSTANCIAR (CRIAR OBJETO)
const camera1 : Camera = new Camera ('Metal', 'CPU', 45); 

console.log(camera1.getMaterial());
console.log(camera1.getComponentesDigitais());
console.log(camera1.getConsumoEnergia());
camera1.capturaImagem();
camera1.capturaAudio();