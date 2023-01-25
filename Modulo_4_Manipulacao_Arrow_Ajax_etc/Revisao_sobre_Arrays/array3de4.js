
console.log('=======================Ex01: Map: mapea o array=======================');
let lista1=[1,2,3,4,5,6,7,8,9,10];
let ListaMultiplicada= [];
ListaMultiplicada=lista1.map(function(calculo) // mapea cada posição do vetor
                    {
                       // return (`2*${calculo}=${calculo*2}`);
                        return (calculo*2);
                    }
                );
let respSemFor=ListaMultiplicada;
console.log('Sem uso do for: ',respSemFor);
console.log('=======================Fim=======================');


console.log('=======================Ex02: For: mapea o array=======================');
let SegudaListaMultiplicada= [];
for (i in lista1){
    //SegudaListaMultiplicada= lista1[i]*2; multiplica cada posiçao
    SegudaListaMultiplicada.push(lista1[i]*3);
}
let respComFor=SegudaListaMultiplicada;
console.log('Com uso do for',respComFor);
console.log('=======================Fim=======================');

console.log('\n');

console.log('===============Ex03: filter: retorna true ou false====================');
let lista2= [];
    lista2=lista1.filter(function(item)
                            {
                                if (item<5)
                                { 
                                    return true;
                                } else
                                    {
                                        return false;
                                    };
                            }
                        ); 
let res=lista2;
console.log('valores menores que 5',res);
console.log('=======================Fim=======================');

console.log('\n');

console.log('=======================Ex03: every: retorna true se todas condiçoes forem válidas=======================');
let lista2_1= [];
    lista2_1=lista1.every(function(item)
                            {
                                if (item<5)
                                { 
                                    return true;
                                } else
                                    {
                                        return false;
                                    };
                            }
                        ); 
let res2_1=lista2_1;
console.log('Lista: ',res2_1);
console.log('=======================Fim=======================');

console.log('\n');

console.log('=======================Ex04: some: retorna true se uma das condiçoes forem válidas=======================');
let lista2_2= [];
    lista2_2=lista1.some(function(item)
                            {
                            /*     if (item<5)
                                { 
                                    return true;
                                } else
                                    {
                                        return false;
                                    }; */
                                    //uma outra forma mais compacta de escrever o codigo acima é:
                                    return(item<5)? true: false;
                            }
                        ); 
let res2_2=lista2_2;
console.log('A lista tem algum valor menor que 5? ',res2_2);
console.log('Logo temos a seguinte lista:',lista1);
console.log('=======================Fim=======================');





