// use o site: https://codesandbox.io/s/elastic-currying-7dzoen?file=/src/index.js:0-328
// para compilar os codigos abaixo:

// método de usar promessa com axios sem async
import axios from "axios";
axios
  .get('https://api.github.com/users/maykbrito')
  .then(response=>axios.get(response.data.repos_url))
  .then(repos=> console.log(repos.data))
  .catch(error=>console.log(error));

// método de usar promessa com axios utilizando async
async function RespotaFetch(){
   try{
      const user = await axios.get('https://api.github.com/users/maykbrito'); // faz a chamada do usuário
      const repos= await axios.get(user.data.repos_url);
      console.log(repos.data);
    }
    catch(erro){console.log(erro,'Ocorreu algo inesperado!')}
  }

RespotaFetch()