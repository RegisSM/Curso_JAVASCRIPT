function adicionar(...numeros){
    console.log(numeros);
}
adicionar(5,6,7,8,9,10,11,12,13,14,15,19);

//Exercicio de juntar o Rest com Spread

function adicionaNomes(nomes, ...novosNomes){
    let JuntaNomes=[
        ...nomes,
        ...novosNomes
    ];
   //console.log(JuntaNomes);
   return JuntaNomes;
}
let nome=["Regis","Joao","Paulo"];
let ListaDeNomes=adicionaNomes(nome,"Antonio","Maria","Jose","Mario");
console.log(ListaDeNomes);