let telefone= '(30)';
console.log(telefone.padEnd(10,'*')); // preenche apos o termino do conteudo telefone
console.log(telefone.padStart(10,'*'));//preenche antes de começar o conteudo telefone


//exemplo prático onde se utliza o padStart
console.log('\n'+'='.repeat(10)+'Exemplo pratico onde se utliza o padStart'+'='.repeat(10))
let cartao ='1234567895385879';
let lastDigits=cartao.slice(-4);
console.log('O slice imprime os ultimos 4 digitos:\n',lastDigits);
let cardMask1= lastDigits.padStart(16,'*');
console.log('O padStart mascara os numeros que vem antes dos 4 digitos:\n',cardMask1);


//exemplo prático onde se utliza o padEnd
console.log('\n'+'='.repeat(5)+'Segundo Exemplo pratico onde se utliza o padEnd'+'='.repeat(5))
let FistDigits=cartao.slice(0,4); // pega os 4 primeiros digitos
let cardMask2= FistDigits.padEnd(16,'*');
console.log('O padEnd mascara os numeros que vem depois dos 4 digitos:\n',cardMask2);


let agente = "7";
agente = agente.padStart(4,0); //preenche com 0 tres posicoes => 0007
console.log(agente);

//=========================================================
function formatCardNumberToSecret(cardNumber) {
    const [,first , last, ] = cardNumber.split(' ');
    return [ '****',first, last, '****'].join(' ');
}
console.log(formatCardNumberToSecret('1234 5678 9538 5879'));
//==========================================================

/* const maskCpf = (cpf, replace = '*') => {
    const start = 12;
    const end = 15;
    return cpf
        .substring(3, start)
        .padStart(start, replace)
        .padEnd(end, replace);
};

console.log(maskCpf('111.111.111-11')); */