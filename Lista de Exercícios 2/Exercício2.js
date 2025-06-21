//2. Jogo de Adivinhação
//Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')()

let alvo = (Math.random() *100).toFixed(0)
let jogo = true

while(jogo){
    let numero = Number(prompt("adivinhe o numero: "))
    if(numero < alvo){
        console.log("mais alto")
    } else if(numero > alvo){
        console.log("mais baixo")
    } else{
        console.log("Acertou o numero \n fim do jogo")
        jogo = false
    }
}