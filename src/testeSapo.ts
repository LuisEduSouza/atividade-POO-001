//IMPORTAR A CLASSE QUE QUERO UTILIZAR
import { Sapo } from './Sapo';

//INSTANCIAR (CRIAR OBJETO)
const sapo1 : Sapo = new Sapo ('Verde', 25, 'Buffos Regularis'); 

console.log(sapo1.getCor());
console.log(sapo1.getTamanho());
console.log(sapo1.getEspecie());
sapo1.pulo();
sapo1.esticarLingua();