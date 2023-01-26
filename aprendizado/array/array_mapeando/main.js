//Map -> Cria um novo array apartir do original com valores alterados
//Map sempre tem o mesmo tamanho do array original

//Dobre os números
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const numeroEmDobro = numeros.map(function(valor){
    return valor * 2;
});

console.log(numeroEmDobro);

//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave ID em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
    
];

//Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map((obj)=>{
    return obj.nome
});

console.log(nomes);

//Remova apenas a chave "nome" do objeto

const idades = pessoas.map((obj)=>{
  //Forma 1
  // return pessoas.idade  
  
  //Forma 2
  /*
  delete obj.nome;
   return obj;
   */

   //forma 3
   return {idade: obj.idade};
});

console.log(idades);

//Adicione uma chave ID em cada objeto

const addID = pessoas.map((obj,indice)=>{
   // obj.id = (indice+1)*1000; Se fizer dessa forma altera o array original
   const newObj = {...obj};
   newObj.id = indice;
    return newObj;
});

console.log(addID);