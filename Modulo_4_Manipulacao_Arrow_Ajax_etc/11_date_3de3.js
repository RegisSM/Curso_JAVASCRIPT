
let d=new Date();
console.log('Data sem ser alterada: \n',d);
console.log('\n');
d.setFullYear(2023);// o comando set altera o valor da variavel quando passado por parametro
let ano= d;
console.log('Utilizando o set para altera o ano: \n',ano);

console.log('\n')
d.setMonth(3);
let mes= d;
console.log('Utilizando o set para altera o mes: \n',mes);

console.log('\n')
d.setDate(5);
let dia= d;
console.log('Utilizando o set para altera o dia: \n',dia);

console.log('\n')
d.setDate(d.getDate()+7);
let AcrecentandoMaisDia= d;
console.log('Utilizando o set juntamente co get para acresentar 7 dia na frente do dia informado: \n',AcrecentandoMaisDia);

console.log('\n')
d.setHours(d.getHours()+20);
let horaAtualizada= d;
console.log('Utilizando o set juntamente com get para acresentar 7 horas na frente da hora informada: \n',horaAtualizada);

console.log('\n===============Exercicio:================ ');
let m = new Date(2021,09,23,21,20,11);
console.log(m);
m.setDate(m.getDate()+100);
let aumentaDia= m;
console.log('Se somarmos mais 100 dias, do dia informado, logo, dara numa: \n',aumentaDia);