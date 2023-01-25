/* É um objeto JavaScript com a promessa de que algo será realizado
É usado para operações assíncronas
Não bloqueia outras operações
Essa promessa não significa que vai dar certo ou que vai dar errado. 
=====================================================================
Uma promessa poderá ser:
Pending: Estado inicial, assim que o objeto da promessa é iniciado
Fulfilled: A promessa foi concluída com sucesso
Rejected: A promessa foi rejeitada, houve um erro
Settled: Seja com sucesso ou erro, ela foi finalmente concluída*/
let aceitar = false;
console.log('=== Inciando corrida de uber ===')
const promessa = new Promise((resolve,reject)=>{
    if (aceitar=== true) {return resolve('O carro chegou!');}
    else {return reject('Pedido Negado');}
})

    promessa
        .then((aceito)=>console.log(aceito))// o parentese em ()=> é opicional
        .catch(erro=>console.log(erro))
        .finally(()=>console.log('=== Corrida Finalizada ==='));
    
console.log('Aguardando...');