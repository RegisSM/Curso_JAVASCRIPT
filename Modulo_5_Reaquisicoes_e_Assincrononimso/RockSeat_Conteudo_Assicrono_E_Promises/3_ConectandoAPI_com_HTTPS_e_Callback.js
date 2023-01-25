const https = require('https') // existe dentro dos pacotes do node
const API = 'https://jsonplaceholder.typicode.com/users';
https.get(API,resposta=>{
     console.log(resposta.statusCode);
})// o .get é uma funcionalidade
console.log('Aguarde conectando API');
