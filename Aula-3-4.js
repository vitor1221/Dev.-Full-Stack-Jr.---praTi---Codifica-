//AULA 3
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
        console.log("o mair numero é ", numero1 )
    }
}
if (numero2 > numero1){
    if(numero2 > numero3){
        console.log("o mair numero é ", numero2 )
    }
}
if (numero3 > numero1){
    if(numero3 > numero2){
        console.log("o mair numero é ", numero3 )
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
//npm install prompt-sync (usar no terminal para instalar a biblioteca)

const prompt = require('prompt-sync')()//calculadora simples do professor com if else

let valor1 = Number(prompt("Insira o primeiro valor: ")) 
let valor2= Number(prompt("Insira o segundo valor: ")) 
let op = prompt('Informe a operação desejada: (+, -, /, *): ') 
let resultado = 0 

if(op === '+'){ 
    resultado = valor1 + valor2 
} else if(op === '-'){ 
    resultado = valor1 - valor2 
} else if(op === '*'){ 
    resultado = valor1 * valor2 
} else if(op === '/'){ 
        if(valor2 !== 0){ 
            resultado = valor1/valor2 
        } else { 
            console.log('Erro: divisão por zero') 
            resultado = undefined 
} 
} else { 
    console.log('Operação invalida') 
    resultado = undefined 
} 
if (resultado !== undefined) { 
    console.log("Resultado:", resultado) 
}

//AULA 4
let opção = 1 //pode ser usado com '',mas para isso no case tambem tem que ter ''
switch(opção){
    case 1: 
        console.log("Primeira opção selecionada")
        break
    case 2:
        console.log("Segunda opção selecionada")
        break
    default:
        console.log("Opção invalida")
        break
}
//Exerciso 1 da aula
let valor3 = Number(prompt("Insira o primeiro valor: "))
let valor4= Number(prompt("Insira o segundo valor: ")) 
let opera = prompt('Informe a operação desejada: (+, -, /, *): ') 
let resultado1

switch(opera){
    case '+':
        console.log(valor3 + valor4)
        break
    case '-':
        console.log(valor3 - valor4)
        break
    case '*':
        console.log(valor3 * valor4)
        break
    case '/':
        if (valor4 !== 0){
            console.log("Operação invalida divisão por zero")
        } else {
        console.log(valor3 / valor4)
    }
        break
    default:
        console.log("Opção invalida")
        break
}

//Exerciso 2 : verificar se um número é positivo, negativo ou zero
let NumeroVerificar = Number(prompt("Insira o número para verificar: "))

if(NumeroVerificar > 0){
    console.log("Número positivo")
} else if(NumeroVerificar < 0){
    console.log("Número negativo")
} else{
    console.log("Número é igual a zero")
}

//Exerciso 3 : verificar se é bissexto

let AnoVerificar = Number(prompt("Insira o número para verificar: "))

if((AnoVerificar % 4 == 0 && AnoVerificar % 100 != 0) || AnoVerificar % 400 == 0){
    console.log("Ano bissexto")
} else {
    console.log("Não é bissexto")
}

//Exerciso 4 : definir faixas etárias para crianças, adolescentes e adultos e com switch apresentar na tela se a pessoa que informou a idade está em uma e qual a faixa etária 
let idade = Number(prompt("Insira sua idade: "))

switch(true){// true para que cada case seja uma expressão lógica
    case idade < 13:
        console.log("Você é criança")
        break
    case idade < 18 && idade > 12:
        console.log("Você é adolescente")
        break
    case idade < 65 && idade > 17:
        console.log("Você é adulto")
        break
    default:
        console.log("Não esta dentro das faixas etárias")
        break
}