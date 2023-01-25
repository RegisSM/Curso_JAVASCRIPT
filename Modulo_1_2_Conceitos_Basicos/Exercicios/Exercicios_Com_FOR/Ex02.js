/* 
/Gerar uma sequencia de números de 1 a 100, mas nessa sequencia, a cada 4 numeros
 gerados, você deve exibir um separador "-" no lugar do número, exemplo:
1234-6789-11121314-
(Veja que o 5, 10 e 15 foram substituidos por -) 
*/
let contador='';
    for (let j=1; j<=10; j++)
    {
        contador+= j+'\n';
        if(contador / 5 == 0){
        contador= '- \n';
        }
    }
    console.log('Valor gerado: \n'+contador);