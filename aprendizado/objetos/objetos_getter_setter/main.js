// defineProperty -> define uma propriedade do objeto
//define-Properties -> Define varias propriedades do objeto

function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    //Define as propriedades da chave estoque
    Object.defineProperty(this, estoque, {
        //Permite que a chave estoque seja apenas exibida
        enumerable: true,

        //Permite a atribuição de valor na chave
        value: estoque,

        //Permissão de alterar o valor da chave
        writable: false,

        //permite a reconfiguração da chave
        configurable:true 
    });
    
    //Define a propriedade de várias chaves do objeto
    Object.defineProperties(this,{
         nome:{
            enumerable:true,
            value:nome,
            writable: true,
            configurable:true
         },
         preco:{
            enumerable:true,
            value:nome,
            writable: true,
            configurable:true
         },

    });
};

const p1 = new Produto('Camiseta', 20, 3);

//Função que mostra as chave enumeraveis
console.log(Object.keys(p1));

