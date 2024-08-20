//IMPORTAR A CLASSE QUE QUERO UTILIZAR
import { Arvore } from './Arvore';

//INSTANCIAR (CRIAR OBJETO)
const arvore1 : Arvore = new Arvore ('Primavera', 15 , 'Verde clara'); 

console.log(arvore1.getFolhagem());
console.log(arvore1.getTamanho());
console.log(arvore1.getCor());
arvore1.liberarOxigenio();
arvore1.produzirFrutos();