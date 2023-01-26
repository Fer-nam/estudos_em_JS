// new Object
const objA = {
    chaveA: 'A'
};

//Transformar o __proto__ do objB 
//no objA
const objB = {
    chaveB: 'B'
};

//Criando objeto de forma diferente
const objC = new Object();
objC.chaveC = 'C';

//(objeto de destino, objeto a virar o prototipo)
Object.setPrototypeOf(objB,objA);

// Criando uma cadeia de prototypes
Object.setPrototypeOf(objC, objB);

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
};

//Para melhor performace é recomendado 
// abrir a função fora do objeto
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1  = new Produto('Camiseta', 50);
const p2 = {
    nome: 'Caneca',
    preco: 15,
};

//Vinculando as funções do objeto Produto
// Ao objeto p2
Object.setPrototypeOf(p2,Produto.prototype);
console.log(p2);

//Forma de criar o objeto e ja setar 
//o prototype dele
const p3 = Object.create(Produto.prototype,{
    //Declarações de chave e suas configurações 
    preco:{
        writable: true,
        configurable: true,
        enumerable:true,
        value: 113
    },
    tamanho2:{
        writable: true,
        configurable: true,
        enumerable:true,
        value: 42
    },
});

p3.aumento(10);

console.log(p3);