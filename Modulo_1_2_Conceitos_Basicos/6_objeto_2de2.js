
console.log('============= Usando Objeto =============');
let Tipo_carro={ // se usarmos o this, logo não é preciso declara o nome da varialvel para chamar um determinado objeto
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligado:false,
    ligar:function(){
        this.ligado=true;
        console.log('Ligando o '+this.nome);
        console.log("Barulho: vrum! vrum!")
    },
    acelerar:function(){
        if (this.ligado===true){
         console.log("Barulho do acelerador: vummmmm! vummmmm! vummmm!");
        }else{
            console.log("O "+this.nome+" do modelo "+this.modelo+" esta desligado!")
        }
    }
};
Tipo_carro.ligar();
console.log("Modelo do carro:",Tipo_carro.modelo);
Tipo_carro.acelerar();
console.log('=========================================');

let carros =[ //4 objetos dentro de um array
    {nome:'Fiat',modelo:'Palio'},//poscao:  0
    {nome:'fiat',modelo:'Uno'},           //1
    {nome:'Toyota', modelo:'Corolla'},    //2
    {nome:'Ferrari', modelo:'Spider'}     //3
];
console.log(carros[2]);//acessando a posição 2
// ou então podemos usar
console.log(carros[2].nome);