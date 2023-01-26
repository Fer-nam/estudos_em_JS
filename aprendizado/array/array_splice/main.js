//              -5        -4        -3        -2        -1      
//               0         1         2         3         4                         
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//splice(indice, delete, elem1, elem2...)-> Faz oque a maioria dos metodos de array fazem
//pop

const removidos = nomes.splice(4,1);//Seleciona o quarto elemento e remove um

const adicionado = nomes.splice(3,0,'luiz');//Apartir do indice 3 deleta 0 valores e adiciona o luiz no 3 indice

console.log(nomes, removidos);