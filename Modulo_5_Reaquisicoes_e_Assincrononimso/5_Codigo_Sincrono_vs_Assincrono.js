//código sincrono
let nome1='mario';
let sobrenome1='Bross';
let completo1 =nome1+' '+sobrenome1;


//código assíncrono
let nome2='mario';
let sobrenome2='Bross';
//let temperatura= maquina.PegarTemperatura(); // comando assicrono leva alguns tempo para retorna
let completo2 =nome2+' '+sobrenome2;

const x = 10;
const y = 20;
let z;

setTimeout(() => {
  z = 30;
  console.log(z)
}, 2000);

console.log(x);
console.log(y);
console.log(z);
