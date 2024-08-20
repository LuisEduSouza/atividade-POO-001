import { Navio } from './Navio';

//INSTANCIAR (CRIAR OBJETO)
const  navio1 : Navio = new Navio ('Metal','Arroz', 3000); 

console.log(navio1.getMaterial());
console.log(navio1.getCarga());
console.log(navio1.getPeso());
navio1.transportar();
navio1.locomover();