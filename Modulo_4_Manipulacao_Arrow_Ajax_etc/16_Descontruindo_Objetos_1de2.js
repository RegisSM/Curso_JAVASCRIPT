let pessoa={
    nome:'Regis',
    sobrenome: 'Souza',
    idade:25,
    profissão:'Professor',
    social:{
        facebook: 'RegisM', 
        instagram:'RegisS'        
    },
    nomeCompleto: function(){
        //  O this serve para indetificar qual objeto sera usado
        return `${this.nome} ${this.sobrenome}`;
    }
}

//uma maneira de guardar as informaçoes em variaveis é:
//let nome= pessoa.nome;
//let sobrenome= pessoa.sobrenome;
//let idade = pessoa.idade;
//...
// uma maniera mais simples e que quarda as informaçoes em  apenas uma variavel é:

let {idade, profissão, social:RedeSocial} = pessoa; // transforma os objetos em variaveis

//é possível definir um valor padrão caso não seja definido no objeto principal ex:
let {Peso=70}  = pessoa; 
console.log(
    'Nome Completo:',pessoa.nomeCompleto(),
    '\nIdade:',idade,
    '\nPeso:',Peso,
    '\nRedeSocial:',RedeSocial
);

/* obs: A palavra-chave [this] refere-se ao proprietário das propriedades e métodos, 
e seu uso evita: que o nome do proprietário seja descrito várias vezes dentro do objeto.*/