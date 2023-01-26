const produto = {nome: 'Caneca', preco: 1.8};

//Object.assing -> adiciona valores e objetos objeto vazio
//const outraCoisa = Object.assign({},produto, {material:'Porcelana'});
//Object.getOwnPropertyDescriptor(produto, 'nome') ->
//Descreve as propriedades da chave do objeto

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));


