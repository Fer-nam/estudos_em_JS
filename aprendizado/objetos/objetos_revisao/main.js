
//Objeto literal
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};
//As chaves do objetos são acessadas atraves da notação de ponto

//Ex: pessoa.nome
//Também pode ser acessado por colchetes
//Ex: pessoa['nome']

//Objeto construtor

const pessoa2 = new Object();
    pessoa2.nome = 'Luiz';
    pessoa2.Sobrenome = 'Otavio';
    pessoa2.idade = 30;
    pessoa2.falarNome = function(){
        return(`${this.nome} está falando seu nome`);

    };
    pessoa2.getDataNascimento = function(){
        const dataAtual = new Date();//Chama o construtor Date

        //Subtrai a idade e o ano atual
        return dataAtual.getFullYear() - this.idade;
         
    }


//apagar chave do objeto
delete pessoa.nome;

//Utiliza a função do objeto

pessoa2.falarNome();

console.log(pessoa2.getDataNascimento());

//Ver todas as chaves do objeto pessoa

for (let chave in pessoa2){
    console.log(chave);
};

// Factory funtions / constructor functions / Classes
//Utilizadas para quando se chama muito um objeto

//Ex: Factory fuctions \/
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Fernando', 'Silva');
console.log(p1.nomeCompleto);


//Ex: Construtor Funcionts

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
};

// A palavra new cria um objeto vazio e atrela a palavra
// This no novo objeto
const p2 = new Pessoa2('Luiz', 'Miranda');

//Para evitar que o objeto tenha o valor atualizado
// é utilizado a seguinte função
Object.freeze(p2);