class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
        
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }

    comer(){
        console.log(`${this.nome} está comendo`);
    }

    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}

//Ao instância o objeto ja é acoplada as funções de __proto__
//Ao novo objeto
const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Miranda');
const p3 = new Pessoa('Joana', 'Miranda');

console.log(p1);

//Comparando com a função construtora

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando.`)
}

const p4 = new Pessoa2('Luiz', 'Miranda');

console.log(p4);