
// use o site: https://codesandbox.io/s/elastic-currying-7dzoen?file=/src/index.js:0-328
// para compilar os codigos abaixo:

import axios from "axios";
axios.get('https://api.github.com/users/RegisSM') // devolve uma promessa pendende
  .then(res => {
    let usuario= res.data;
    axios.get(usuario.repos_url) // faz uma nova chamada em busca dos repositorios
    .then(DadosDoRepos=>{
      console.log(DadosDoRepos.data); //motra os dados do repositorio
    })
    .catch(error=>console.log(error));
  })
  .catch(error =>console.log(error));

  // jeito mais enxuto utilizado o return
axios.get('https://api.github.com/users/RegisSM') // devolve uma promessa pendende
  .then (respose=>{axios.get(respose.data.repos_url);}) // retorna uma busca dos repositorios
  .then(repos=>console.log(repos.data))
  .catch(erro=> console.log(erro));