let carro={
    nome:'Fiat',
    sobrenome:'Palio',
    idade:15,
    social:{
        facebook:'Facebook do Palio a venda',
        instagram:{
            url:'Instagram do Palio em promoção',
            seguidores:'1000'
        }
    },
    nomeCompleto:function(){
        return `${this.nome} ${this.sobrenome}`
    }
};
//comando para pegar os dados referente ao social do carro:
//let {facebook, olx}=carro.social; 
//console.log(facebook,olx);


//Desconstruindo uma function objetic para uma variavel
//====================================================================================
//para resolver o problema do this em funçoes que foram descontruidas utiliza-se o "bind"
carro.nomeCompleto= carro.nomeCompleto.bind(carro); //o bind forçar o this a ser o mesmo sempre
let {nomeCompleto}=carro;
console.log('Ex de uma função sendo descontruida, e transformada em uma variável\n',
            nomeCompleto());


//====================================================================================



//outro método de pegar: nome idade e o instagram do social
//====================================================================================
let {nome,idade,social:{instagram:{url:inst,seguidores}} }=carro; 
//No caso acima, o instagram que vira variavel, e o nome da variavel url, passa a chamar inst
 
console.log(nome,idade,inst,seguidores);

// também é possivel apenas chamar o social ex:
let {social:{instagram} }=carro; 
console.log(instagram);
console.log('\n');
//====================================================================================



//====================================================================================
console.log('=============== Usando outro exemplo em funçoes: ===============');
let TipoCarro={
    nome:'Fusca',
    sobrenome:'Volkswagen',
    idade:50,
    social:{
        facebook:'Facebook do Fusca a venda',
        instagram:{
            url:'Instagram do Fusca em promoção',
            seguidores:'10.000'
        }
    }
};
    function PegarNomeCompleto(obj){
        return obj.nome+' '+obj.sobrenome;
    }
    

//outra forma de fazer utilizando descontrução de objeto é:
 function OutraFormaPegarNomeCompleto({nome,sobrenome='Volkswagen Ano 1970', social:{instagram:{url:instagram}}}){
    return nome,' ',sobrenome,' ',idade, `( siga nos no ${instagram})`;
}

    console.log('Primeira maneira:',PegarNomeCompleto(TipoCarro));
    console.log('Segunda maneira: Utilizando melhor a descontrução de objeto\n'
                ,OutraFormaPegarNomeCompleto(TipoCarro));
//====================================================================================