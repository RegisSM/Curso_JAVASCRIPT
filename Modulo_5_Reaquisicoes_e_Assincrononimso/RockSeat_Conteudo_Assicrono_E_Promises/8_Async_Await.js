/* 
    #Async/Await
    - Maneira de escrever promises
    - sntactic sugar

*/
const promessa= new Promise(function(resolve,reject){ // promessa pendente
   const verifica= true;
   if (verifica=== false){ return resolve ('Ok.');} // retorna resolvida
   return reject('Erro.')     
})
   

// o await  é a espera para realização de uma promessa

async function iniciar(){ // essa função ira substituir o .then e o .catch
    try{
        const result = await promessa; 
        console.log(result,'Compilou sem dar problema!');
    }
    catch(e){
        console.log(e,'Ocorreu um problema!');
    }
    finally{
        console.log('Projeto Finalizado!')
    }
}
iniciar();