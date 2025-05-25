//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require('prompt-sync')()

let numero, soma = 0
for(contador = 1; contador <= 5; contador++){//contagem de 1 a 5
    numero = Number(prompt("Insira um número: "))//pede os números ao usuário
    soma = soma + numero 
}
console.log(soma)