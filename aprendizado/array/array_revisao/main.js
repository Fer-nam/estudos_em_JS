//array é valor por referência

//atributos do array
/*
length -> retorna o tamanho
*/
//Funcções do array
/*
Pop() -> remove o primeiro valor do array

shift() -> Remove o útlimo valor do array

push() -> adiciona um valor como último array

unshift() -> adiciona um valor como primeiro array(pode trazer problemas de performance em array grandes)

slice(indicie_inicial, indice_final) -> Fatia array e mostra os fatiados(não mostra o último)

split('Separador') -> pega cada palavra da string que estão separadas pelo separador  e transforma em um array

join('separador') -> pega cada indice do array e transforma em uma string
*/
//                  0        1         2   
const nomes = ['Eduardo', 'maria', 'joana', 'wallace', 'Rosana'];
const novo  = [...nomes];//Forma de utilizar o SPREAD OPERATOR



//const nomes = new Array('Eduardo', 'Maria', 'joana');
//Forma literal de escrever  um array(Pouco usado)

nomes[2] = 'joão'; //Atribuir valor do array de indice 2

//delete nomes[2]; deleta o valor do indice 2 do array e não
//altera o tamanho

novo.pop();
console.log(nomes);
console.log(novo);

