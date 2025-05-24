//Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
const prompt = require('prompt-sync')()

let idade = Number(prompt("Insira sua idade: "))//pede a idade ao usuario
//verifica a idade
if(idade >= 0 && idade < 13){//se está entre 0 e 12 é criança
    console.log('Você é criança')
} else if(idade > 12 && idade < 19){//se está entre 13 e 18 é adolescente
    console.log("Você é adolescente")
} else if(idade > 18 && idade < 65){//se está entre 19 e 64 é adulto
    console.log("Você é adulto")
} else{//se está acima de 64 é idoso
    console.log("Você é idoso")
}