import { ArCondicionado } from './ArCondicionado';

const arcondiconado1 : ArCondicionado = new ArCondicionado ('Plástico','Evaporador', 25); 
console.log(arcondiconado1.getMaterial());
console.log(arcondiconado1.getConsumoEnergia());
console.log(arcondiconado1.getComponentesEletronicos());
arcondiconado1.resfriar();
arcondiconado1.ventilar();