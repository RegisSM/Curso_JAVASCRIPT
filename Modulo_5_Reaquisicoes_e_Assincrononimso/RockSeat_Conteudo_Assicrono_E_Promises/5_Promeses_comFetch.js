
// use o site: https://codesandbox.io/s/elastic-currying-7dzoen?file=/src/index.js:0-328
// para compilar os codigos abaixo:

//================== Forma sem resumir ==================
fetch("https://api.github.com/users/RegisSM")
    .then((resposta) => {
        resposta.json()
        .then((PuxaDados) => {
            // console.log(PuxaDados);
            fetch(PuxaDados.repos_url)
                .then((NovaResposta) => {
                    NovaResposta.json()
                    .then((PuxaRepus) => {
                    console.log(PuxaRepus);
                });
            });
        });
    });

//================== Forma resumida ==================

fetch("https://api.github.com/users/RegisS")
    .then((resposta)=> resposta.json())
        .then((PuxaDados)=> fetch(PuxaDados.repos_url)) /// repos_url é uma objeto dentro do arquivo
            .then((NovaResposta)=>NovaResposta.json())
                .then((PuxaRepos)=>console.log(PuxaRepos))
                .cath((error)=> console.log('Deu Erro!'));