import axios from 'axios'
Promise.all([
    axios.get('https://api.github.com/users/RegisSM'),
    axios.get('https://api.github.com/users/RegisSM/repos')
])
.then(responses=>{
    console.log(responses[0].data.login);
    console.log(responses[1].data.length);
})
.catch(erro=>console.log(erro));