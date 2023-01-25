let  isMember = true;
let shopp= isMember ? 'gratis' : 10;
console.log(isMember? 'Você é membro': 'Você não é membro');
console.log('Frete '+
            shopp.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        );

//=====================
let age= '1';

let isAdult=((age>=18 && age<60)?'Você é adulto':'Você não é adulto');
console.log(isAdult);