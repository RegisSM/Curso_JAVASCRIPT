console.log('============Temos Três formas de criar funçoes============');

console.log('============1ª forma: Função com nome============\n');
let x, y;
function Entrada(x,y){
    a=x;
    b=y;
    return [(x+y),(x-y),(x*y),(x/y)];
}
let result=Entrada(5,2);
console.log(Entrada,'\n');
console.log(` ${a}+${b} = ${result[0]}\n`,
            `${a}-${b} = ${result[1]}\n`,
            `${a}*${b} = ${result[2]}\n`,
            `${a}/${b} = ${result[3]}\n`);
console.log('===========================================================\n');

console.log('============2ª forma: Estilo de funcao sem nome============\n');
let calcular= function(x,y){
    a=x;
    b=y;
    return [(x+y),(x-y),(x*y),(x/y)];
}
let r2=calcular(1,2);
console.log(calcular,'\n');
console.log(` ${a}+${b} = ${r2[0]}\n`,
            `${a}-${b} = ${r2[1]}\n`,
            `${a}*${b} = ${r2[2]}\n`,
            `${a}/${b} = ${r2[3]}\n`);
console.log('===========================================================\n');

console.log('============3ª forma: Estilo de Arrow============\n');
let cal= (x,y)=>{
    a=x;
    b=y;
    return [(x+y),(x-y),(x*y),(x/y)];
}
let r3=calcular(1,1);
console.log(cal,'\n');
console.log(` ${a}+${b} = ${r3[0]}\n`,
            `${a}-${b} = ${r3[1]}\n`,
            `${a}*${b} = ${r3[2]}\n`,
            `${a}/${b} = ${r3[3]}\n`);
console.log('===========================================================\n');

console.log('============4ª forma: Estilo de Arrow============\n');
let c= (x,y)=> [(x+y),(x-y),(x*y),(x/y)]; // retorna sem o uso do return

let r4=c(2,2);
console.log(c,'\n');
console.log(r4[0],r4[1],r4[2],r4[3]);
console.log('===========================================================\n');

console.log('============5ª forma: Estilo de Arrow com um Parâmetro e com () ============\n');
// utiliza apenas "um parâmetro"
let QtdLetraNome=(nome)=> nome.length;
console.log('tem ',QtdLetraNome('Regis'),'letras.');
console.log('===========================================================\n');

console.log('============6ª forma: Estilo de Arrow com um Parâmetro e sem () ============\n');
// Quando utiliza-se apenas "um parâmetro" o parentese é opicional logo: podemos tirar
let QtdLetra= nome=> nome.length;
console.log('tem ',QtdLetra('Regis'),'letras.');
console.log('===========================================================\n');