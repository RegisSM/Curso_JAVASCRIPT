// use o site: https://codesandbox.io/s/elastic-currying-7dzoen?file=/src/index.js:0-328
// para compilar os codigos abaixo:

// Usando o método fetch api seria assim:

 fetch('https://api.github.com/users/maykbrito')
.then(response=>response.json())
.then(data=>fetch(data.repos_url))
.then(res=> res.json())
.then(d=>console.log(d))
.catch(err=>console.log(err));

//Agora usando o Async / Await com Fetch seria assim:

async function start(){ // inicia uma função assincrona
    try{
        const url= await fetch('https://api.github.com/users/maykbrito'); // endereço que teremos que 'esperar' por uma resposta
        const users= await url.json(); // espera o objeto ser transformando em uma string do tipo json
        const reposDoUsers= await fetch(users.repos_url); // espera a funcão pegar uma lista de repositorios do tipo  user.repos_url
        const reposJson= await reposDoUsers.json(); // transforma essa lista de repositorios em json
        console.log(reposJson);
    }
    catch(erro){console.log(erro,'Falhou!')}
  }; 
  start(); //chama a função


/* outra forma:*/
    async function start(){ 
        const url= fetch('https://api.github.com/users/maykbrito');
        const user= await fetch(url).then((resposta)=>resposta.json()); // busca uma respsto e transforma em json
        const reposDoUsers= await fetch(user.repos_url).then((resposta)=> resposta.json());
        console.log(reposDoUsers);
    }

    start().catch((e)=>console.log(e,'Falhou!'));
