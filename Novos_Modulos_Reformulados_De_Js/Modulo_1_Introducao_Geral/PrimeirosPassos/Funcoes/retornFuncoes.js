function soma(a,b){ //recebe
    return r=(a+b); //retorna
}
console.log(soma(5,2)); //pega os dado

//===outro ex:
function nomeCompleto(nome, sobrenome){
    return `${nome}${sobrenome}`;
}
let completo= nomeCompleto('regis',' souza');
console.log(completo);


//outro ex:
console.log('== Outro Ex ===');
let id=19;
console.log('Idade',id);
function Classificacao(idade){
    if (idade>=18){
        return true;
    }else{
        return false;
    }
}
if (Classificacao){console.log('É maior de idade');}
else{console.log('é menor de idade');}