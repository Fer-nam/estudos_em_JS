//Função construtora

const falar = {
    falar(){
        console.log(`${this.nome} está falando`);
    },
};

const comer = {
    falar(){
        console.log(`${this.nome} está comendo`);
    },
};

const beber = {
    falar(){
        console.log(`${this.nome} está bebendo`);
    },
};


//const pessoaPrototype = {...falar, ...comer, ...beber};
//forma de atribuir as funções ao objeto construtor
// de forma dinamica
//o nome disso é composição pois o código está compondo
//o objeto

const pessoaPrototype = Object.assign({}, falar, comer, beber);


function criaPessoa(nome, sobrenome){
   return Object.create(pessoaPrototype,{
    nome:{ value:nome },
    sobrenome:{value:sobrenome }

   });

}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = criaPessoa('Maria', 'A.');
console.log(p2.falar);

