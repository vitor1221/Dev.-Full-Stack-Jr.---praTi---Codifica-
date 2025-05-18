const prompt = require('prompt-sync')();
let idade = Number(prompt("Insira sua idade: "));

switch (true) {
    case idade < 13:
        console.log("Você é criança");
        break;
    case idade < 18:
        console.log("Você é adolescente");
        break;
    case idade < 65:
        console.log("Você é adulto");
        break;
    default:
        console.log("Você é idoso");
        break;
}
