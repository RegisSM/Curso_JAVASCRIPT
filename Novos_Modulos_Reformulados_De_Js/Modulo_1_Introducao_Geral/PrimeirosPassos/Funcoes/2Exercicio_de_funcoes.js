function calculaImovel(m,q){
    m2= 3000;
    if (q===1){
        console.log("A casa possui 3 quartos, logo:");
        return m2=m*m2*1;
    }
    else if(q===2){
        console.log("A casa possui 3 quartos, logo:");
        return m2=m*m2*(1.2);
    }
    else if(q===3){
        console.log("A casa possui 3 quartos, logo:");
        return m2=m*(m2*(1.5));
    }
}
let metragem=15;
let quartos=3;
let preco=calculaImovel(metragem,quartos);

console.log(`A casa custa R$ ${preco} por metro quadrados`)