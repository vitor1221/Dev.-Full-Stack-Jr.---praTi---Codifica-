//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require('prompt-sync')()

let num = Number(prompt("numeros para fazer o fatorial: "))//pede o fatorial desejado pelo usuário
let fat = 1, numero = num
for(contador = num; contador >= 1; contador--){// faz o fatorial
    fat *= num
    num -= 1
}

console.log(`fatorial de ${numero} é : ${fat}`)// printa o numero e seu fatorial