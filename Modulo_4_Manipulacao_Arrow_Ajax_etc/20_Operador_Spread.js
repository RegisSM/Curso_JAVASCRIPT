console.log('===================1ª forma: ===================');
let numeros=[1,2,3,4];
let outros = [...numeros,5,6,7,8]; // faz a junção de dois arrays
console.log(outros);
console.log('================================================\n');


console.log('===================2ª forma: ===================');
let info={nome:'Regis',sobrenome:'Souza',idade:'99'};
console.log(info);
let novaInfo={
    ...info, // faz junção de info com nova info dentro de apenas 1 objeto
    cidade:"Campina Grande",
    estado:'Paraiba',
    pais: 'Brasil'
};
console.log(novaInfo);
console.log('================================================\n');


console.log('===================3ª forma: Usando função ===================');


function adicionarInformacao(info){
    let NovasInformacoes={
        ...info,
        status:0,
        token:'PrimeiroCadastro',
        dataCadastro:'../../....'
    };
    return NovasInformacoes;
}

x=adicionarInformacao({nome:'Bonieky',sobrenome:'Lacerda'});
console.log(x);