
let d=new Date();
let ano=d.getFullYear();// informa o ano
let mes= d.getMonth()+1; // mes.Para deixar o mes correto basta add +1
let diaS= d.getDay(); // informa o dia da semana indo de 0 a 6. onde 0=> domingo e 6 => sabado
let diaA= d.getDate();
console.log('Ano:',ano);
console.log('Mes:',mes);
console.log('Dia atual:',diaA);
console.log('Dia da semana:',diaS);
console.log('================================================\n');
let hora = d.getHours();
let minutos= d.getMinutes();
let segundos= d.getSeconds();
let ms= d.getMilliseconds();
let msTimeStamp= d.getTime();
console.log('Hora:',hora);
console.log('Minuto:',minutos);
console.log('Segundos',segundos);
console.log('Milesegundos',ms)
console.log('Milisegundos entre 1970 a 2022',msTimeStamp);
