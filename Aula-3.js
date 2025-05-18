console.log("ola mundo")
let variavel // recomedado a usar
var nome = "Vitor"
const contande = 1 // variavel que não é variavel = constande

let num1 = "10"
console.log(parseInt(num1) +10) // muda o tipo de variavel

//Exercicio 1: Verificar de um numero é par ou ipar.
let num = 2

if ((num % 2) == 0){
    console.log("numero é par")
}   else {
    console.log("numero é impar")
}
//ou
((num % 2) == 0) ? console.log("numero é par") : console.log("numero é impar")

//Exercicio 2: encontrar o maior entre três números.

let numero1 = 1, numero2 = 2, numero3 = 3
if (numero1 > numero2){//meu jeito (muito longo)
    if(numero1 > numero3){
        console.log("o mair numero é " + numero1 )
    }
}
if (numero2 > numero1){
    if(numero2 > numero3){
        console.log("o mair numero é " + numero2 )
    }
}
if (numero3 > numero1){
    if(numero3 > numero2){
        console.log("o mair numero é " + numero3 )
    }
}
//ou
if((numero1 > numero2) && (numero1 > numero3)){//jeito do professor
    console.log("O primeiro número é o mair!")
} else if((numero2 > numero1) && (numero2 > numero3)){
    console.log("O segundo número é o mair!")
} else if((numero3 > numero2) && (numero3 > numero1)){
    console.log("O terceiro número é o mair!")
} else{
    console.log("Os números são iguais ou há empate entre dois ou mais números")
}

//Exercicio 3: faça uma calculadora simples utilizando entrada de usuário.
//prompt()
//const prompt = require('prompt-sync')()