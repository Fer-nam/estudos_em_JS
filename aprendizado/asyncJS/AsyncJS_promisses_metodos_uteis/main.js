function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo){
    
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') reject(false);

        setTimeout(()=>{
            resolve(msg.toUpperCase()+' -Passei na promisse');
        },tempo);
    });
    
}

//funções das promisses
//promisse.all -> recebe um array com promisses
// e entra com um único array com o resultado

/*
const promises = [
    'Primeiro valor',
    esperaAi(' promise 1 ', 3000),
    esperaAi(' promise 2 ', 500),
    esperaAi(' Promise 3 ', 1000),
    'Outro valor'
];


Promise.all(promises)
.then(function (valor){
    console.log(valor);
})
.catch(function (erro){
    console.log(erro)
});
*/


//promisse.race -> retorna o valor da primeira promisse a ser concluída

/*
const promises = [
    
    
    esperaAi(' promise 1 ', rand(1,5)),
    esperaAi(' promise 2 ', rand(1,5)),
    esperaAi(' Promise 3 ', rand(1,5)),
    
];

Promise.race(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});
*/

//promise.resolve -> Retorna uma promessa resolvida 


/*
function baixaPagina(){
    const emCache = false;


    if(emCache){
        return Promise.resolve('Pagina em cache');
    }else{
        return esperaAi('Baixei a página', 1000);
    }
}

baixaPagina()
.then(dadosPagina =>{
    console.log(dadosPagina);
})
.catch(e => console.log(e));

*/

//promise.reject-> Retorna uma promessa rejeitada 
//mesmo que esteja resolvida
function baixaPagina(){
    const emCache = true;


    if(emCache){
        return Promise.reject('Pagina em cache');
    }else{
        return esperaAi('Baixei a página', 1000);
    }
}

baixaPagina()
.then(dadosPagina =>{
    console.log(dadosPagina);
})
.catch(e => console.log('Erro',e));

