//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
const prompt = require('prompt-sync')()

let peso = Number(prompt("Insira seu peso (kg): "))//pede o peso ao usuario
let altura = Number(prompt("Insira sua altura (cm): "))//pede a altura ao usuario
let IMC = peso/(altura*altura)
//verifica a IMC
if(IMC < 18.5){//se é menor que 18.5 é baixo peso
    console.log('Você esta abaixo do peso')
} else if(IMC >= 18.5 && IMC <= 24.9){//se é maior igual a 18.5 e menos igual 24.9 peso normal
    console.log('Você esta com o peso normal')
} else if(IMC >= 25 && IMC <= 29.9){//se é maior igual a 25 e menos igual 29.9 sobrepeso
    console.log('Você esta com sobrepeso')
} else {//se esta acima de 30 obesidade
    console.log('Você esta como obesidade')
}