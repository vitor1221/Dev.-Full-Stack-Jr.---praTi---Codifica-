//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
const prompt = require('prompt-sync')()

let valor = Number(prompt("Insira um numero para verificar se é impar ou par: "))//pede um numero ao usuario
//verifica se o resto da divição é 0
if((valor % 2) == 0){//se é igual a 0 é par e printa
    console.log('O numero é par')
} else{//se é diferente de 0 é impar e printa
    console.log('O numero é impar')
}