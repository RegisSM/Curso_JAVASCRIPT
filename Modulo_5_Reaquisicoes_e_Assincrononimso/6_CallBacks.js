function alertar(){
    console.log('opa, tudo bém?');
}

/* Callback (chamar de volta)  =>é uma função que é passada como argumento de outra função 
e depois de algum tempo ela é chamada de volta.

callback também é uma função que demora um determinado período de tempo para terminar,
e logo ser apresentada para o usuário concluída. 


Uma função callback é: Uma função programada para disparar algum evento ao usuário, como
um clique em um botão. */

let nome='Joao';
setTimeout(alertar,2000); // para ser callback deve passar por paramentro
let sobrenome='Baozao';

console.log('Nome Completo: '+nome+' '+sobrenome);