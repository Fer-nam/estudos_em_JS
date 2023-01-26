class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;

    };

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(this.ligado){
            console.log(this.nome + ' já desligado');
            return;
    }

    this.ligado = false;
}
}

/*
const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
d1.desligar();
console.log(d1);
*/

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
       super(nome);//Chama o construtor da classe pai
       this.cor = cor; 
       this.modelo = modelo;
    }
}


class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Olá você alterou o método ligar.');
    }
}


const s1 = new Smartphone('Samsung', 'preto', 'GalaxyS10');

const t1 = new Tablet('Ipad', true);
t1.ligar();
console.log(t1);