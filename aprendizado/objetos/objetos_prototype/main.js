/*
    Definição de prototipo
    Prototipo é o termo usado para se referir ao que foi 
    criado pela primeira vez, servindo de modelo ou
    molde para futuras produções 
*/

/*
Todos os objetos tem uma referência interna para um protótipo 
(_proto_) que vem da propriedade prototype da função 
construtora que foi usada para criar-lo, Quando tentamos
acessar um membro de um objeto, primeiro o motor do JS
vai tentar encontar este membro no próprio objeto e 
depois a cadeia de prototipos é usado até o topo (null)
até encontrar (ou não) tal membro.
*/


//Construtora -> Molde (classe)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'Original '+ this.nome + ' ' + this.sobrenome;
};

Pessoa.prototype.nomeCompleto = function(){
    //Somente é chamada a função construtora nome completo 
    //quando utilizado a notação de ponto
    return this.nome + ' ' + this.sobrenome;
};


//Instância
const pessoa1 = new Pessoa('Luiz', 'O.');// <- função construtora
const pessoa2 = new Pessoa('Maria','A.');// <- função construtora

const data = new Date(); // <- função construtora

console.dir(pessoa1);
console.dir(data);