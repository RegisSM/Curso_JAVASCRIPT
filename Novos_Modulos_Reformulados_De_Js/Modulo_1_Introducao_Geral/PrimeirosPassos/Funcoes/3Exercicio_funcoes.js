function validar(u,s){
 if (u==='Regis' && s==='1111'){return true;}
 else {return false;}
};

let usuario='Regis';
let senha='1111';
let validacao=validar(usuario,senha);
if(validacao){
    console.log('Acesso concedido.');
}else{
    console.log('Acesso negado');
}