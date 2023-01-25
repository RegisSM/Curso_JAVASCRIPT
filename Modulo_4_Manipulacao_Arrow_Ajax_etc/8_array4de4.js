// Nesta aula sera apresentando mais dois itens a ser add na função
let lista=[45,4,9,16,25];

console.log('=============================Ex01: Find============================');
console.log('=====O Find retornara o primeiro item que satifazer a condição=====');
let lista1=[];
lista1=lista.find(function(item){
   return (item===16)? true: false;
}); //o find retorna o primeiro item que satifazer a condição.
console.log(lista1);
console.log('=============================Fim==================================');


console.log('=============================Ex02: FindIndex============================');
let lista2=[];
lista2=lista.findIndex(function(subItem){//o find retorna a primeira posição que satisfazer a condição.
   return (subItem==4)? true: false;
}); 
console.log(lista2);
console.log('=============================Fim==================================');

console.log('========================Ex03: FindIndex com uso de objetos======================');
let listaObjeto=[
                {id:1, nome:'Regis', SobreNome:'Souza'},
                {id:2, nome:'Paulo',SobreNome:'XYZ'},
                {id:3, nome:'Fulano',SobreNome:'Da Silva'}
            ];
let resp= listaObjeto.find(function(item)
                            {
                                return(item.id===2)?true:false; //para chamar o objeto use: item.id
                            });
 
console.log(resp);
console.log('=============================Fim==================================');



console.log('========================Exercicio 1: Com Find======================');
let linguagens=[
               {id: 1, nome: 'Java', tipo: 'Backend'},
               {id: 2, nome: 'CSS', tipo: 'Frontend'},
               {id: 3, nome: 'Ruby', tipo: 'Backend'},
               {id: 4, nome: 'JavaScript', tipo: 'Frontend'},
               {id: 5, nome: 'Node.js', tipo: 'Backend'},
               {id: 6, nome: 'React.js', tipo: 'Frontend'}
            ];
let resultado= linguagens.find(function(linguagem)
                            {
                                return(linguagem.tipo==='Backend')?true:false; //para chamar o objeto use: item.tipo
                            });
 
console.log(resultado);
console.log('=============================Fim==================================');


console.log('========================Exercicio 2: Com Find======================');
let convidados=['Joao', 'Maria','Paulo','Ana']
let podeEntrar= convidados.find(function(nome)
                            {
                           if(nome==='Backend')
                           {
                              return true
                           }
                            });
   let res= podeEntrar?'bem vindo':'você não foi convidado';
   console.log(res);
console.log('=============================Fim==================================');

/* [JS] - Em JavaScript, o método [ arr.forEach(nf) ] 
   consiste basicamente em: Observações:arr = arraynf = nome da função
 */