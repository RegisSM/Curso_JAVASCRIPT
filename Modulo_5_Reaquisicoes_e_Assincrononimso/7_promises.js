function PegarTemperatura(){ // realização de uma requisição
    return new Promise( // returna uma promessa que pode dar certo ou não de acordo com 
                        // o que foi passado por parametro.
        function(resolve, reject){ // aceita ou rejeita
            console.log('Pegando a temperatura...');
        
            setTimeout(function(){
                resolve('40 graus na sombra'); // aceita uma função
                 // temos aqui um callback
            },3000);
        }
    );
}

// usando a promessa
console.log('Antes de rodar:');
let promessa=PegarTemperatura();
console.log('Agurade, pois esta rodando a função\n',PegarTemperatura);
// apos pegar a temperatura então faça:
promessa.then(function(resultado){ //utilização de um callback.
    //  o then serve para quando tiver a promessa, então execulte-a
    //a variavel resultado vai ser passada por paramentro e retornara o resolve.
    console.log('A temperatura é de: ', resultado);  
    console.log('=======================================');  
    });


console.log('=====Logo:=====')
promessa.catch(function(error){
    console.log(error,'Não foi possivel encontrar a temperatura');
});

//o .catch => Responde ao parâmetro reject 
// o .then => Responde ao parametro resolve



//Exercicio para praticar;
console.log('=====Exercício:=====\n');
let c1,c2,c3; c1=2;c2=10;c3=5;
function resp(){
    return new Promise(function(resolver,reject){
        console.log('Somando as informaçoes, favor aguardar...');

            setTimeout(function(){
                let soma= c1+c2+c3;
                resolver(soma);
            },4000);
    });
};
let guardaFuncao= resp();
guardaFuncao.then(function(DeuCerto){
    console.log('Logo:\n ',`${c1}+${c2}+${c3}=${DeuCerto}`);
});