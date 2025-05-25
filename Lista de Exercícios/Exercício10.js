//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()

let numero = Number(prompt("Insira um número: "))//pede um número para o usuario

for(contador = 1; contador <= 10; contador++){//contagem de 1 a 10
    console.log(numero , contador)// printa o numero e a contagem
}