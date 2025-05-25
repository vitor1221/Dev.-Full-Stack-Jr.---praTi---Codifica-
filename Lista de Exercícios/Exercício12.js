//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')()

let mult = Number(prompt("Insira um número para saber a tabuada: "))//pede os números ao usuário

for(contador = 0; contador <= 10; contador++){// faz a tabuada
    console.log(`${contador} X ${mult} = ${contador * mult}`)
}