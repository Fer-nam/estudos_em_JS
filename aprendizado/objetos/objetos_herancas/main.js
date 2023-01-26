
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    //define que camiseta herda os atributos
    //de Produto
    Produto.call(this, nome, preco, );
};

// Atribui as funções de prototype ao construtor camiseta
Camiseta.prototype = Object.create(Produto.prototype);

//Define o objeto construtor Camiseta como construtor do
//objeto camiseta
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco * (this.preco);
}

const produto = new Produto('generico', 111);

//Subscrevendo método aumento
const camiseta = new Camiseta ( 'Regata', 7.5, 'preta');
camiseta.aumento(10);

function Caneca(nome, preco, material, estoque){
   Produto.call(this, nome, preco);
   this.material = material;
   
   Object.defineProperty(this, 'estoque',{
    enumerable:true,
    configurable:false,
    get: function(){
        return estoque;
    },
    set: function(valor){
        if(typeof  valor !== 'number') return;
        estoque = valor;
    }
   })
}

Caneca.prototype = Object.create(Produto.prototype);

Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('ceneca', 13, 'Porcelana', 5);



console.log(camiseta);
console.log(caneca);
console.log(caneca);

