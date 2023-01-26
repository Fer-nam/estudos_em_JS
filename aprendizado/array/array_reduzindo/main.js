//Reduce - reduz o array em um elemento só

//Retorne um array com os pares(filter)
//Retorne um array com o dobro dos valors (map)
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

//Retorne um array com os pares(filter)
const total = numeros.reduce((acumulador, valor, indice, array)=>{
    if(valor%2 === 0) acumulador.push(valor);
    return acumulador;
},[]);

console.log(total);

//Retorne um array com o dobro dos valors (map)

const total1 = numeros.reduce((acumulador, valor, indice, array)=>{
   acumulador.push(valor*2);
   return acumulador;
},[]);

console.log(total);

//Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 47},
    
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);
