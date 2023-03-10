function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo){
    
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') reject(new Error('ERRO'));

        setTimeout(()=>{
            resolve(msg);
        },tempo);
    });
    
}


//Then() é executado após lidar com o resolve
//catch() captura o erro
esperaAi('Conexão  com o BD', rand(1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', rand(1,3));
})
.then(resposta =>{
    console.log(resposta);
    return esperaAi(2222, rand(1,3))
})
.then(resposta=>{
    console.log(resposta);
}).then(()=> {
    console.log('Exibe dados na tela');
})
.catch( e =>{
    console.log('Erro:', e);
});

console.log('Isso aqui sera exibido antes de qualquer promisste');