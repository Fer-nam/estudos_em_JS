// defineProperty -> Getter e Setters

//Get e Set -> protegem os valores do objeto

//Get-> Retornar o valor

//set -> altera o valor

function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable:true, 
        get: function(){
            return estoque;
        },
        set:{function(valor){
             

            this.estoque = valor;
        }

        }
    });
    
};

const p1 = new Produto('Camiseta', 20, 3);

console.log(Object.keys(p1));

