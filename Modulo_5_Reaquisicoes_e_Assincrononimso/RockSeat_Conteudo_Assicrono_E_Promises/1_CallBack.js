function imprimirDado(dado){
    console.log(dado())  //chama a função anonima dentro da funcão imprimir dados
}
// A função anonima sera enviada para imprimir dados, logo imprimir dados
// execulta uma função anonima dentro da funcão imprimir dados
imprimirDado(()=>{ return 'olá mundo!'})