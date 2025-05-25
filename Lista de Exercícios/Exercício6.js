//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
//Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
//Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
const prompt = require('prompt-sync')()
//pede os lados para o usuario
let A = Number(prompt("Insira o valor para o lado A: "))
let B = Number(prompt("Insira o valor para o lado B: "))
let C = Number(prompt("Insira o valor para o lado C: "))

if((A < (B + C)) && (B < (A + C)) && (C < (A + B))){// verifica se é triângulo
    if( A == B && B == C){//verifica o tipo de triângulo
        console.log('Triângulo é equilátero')
    } else if(A == B || A == C || B == C){
        console.log('Triângulo é isósceles')
    } else{
        console.log('Triângulo é escaleno')
    }
} else{
    console.log('Não é um triângulo')
}