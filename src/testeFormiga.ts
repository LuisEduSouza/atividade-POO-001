import { Formiga } from './Formiga';

//INSTANCIAR (CRIAR OBJETO)
const formiga1 : Formiga = new Formiga ('Formiga Faraó',2, 'Polinização'); 

console.log(formiga1.getEspecie());
console.log(formiga1.getTamanho());
console.log(formiga1.getFuncaoColonia());
formiga1.transpotarObjetos();
formiga1.liberarFeromonios();