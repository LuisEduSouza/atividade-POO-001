import { Impressora3D } from './Impressora3D';

//INSTANCIAR (CRIAR OBJETO)
const impressora3D1 : Impressora3D = new Impressora3D (250,'Creality', 3.4); 

console.log(impressora3D1.getVolume());
console.log(impressora3D1.getMarca());
console.log(impressora3D1.getResolucao());
impressora3D1.imprimir();
impressora3D1.pausarImpressao();