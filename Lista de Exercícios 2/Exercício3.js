//3. Palavras Únicas
//Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

let frase = "olá olá mundo mundo";
let palavras = frase.split(" ");
let unicas = [];

for (let i = 0; i < palavras.length; i++) {
  let palavraAtual = palavras[i];
  let encontrada = false;

  for (let j = 0; j < unicas.length; j++) {
    if (palavraAtual === unicas[j]) {
      encontrada = true;
      break;
    }
  }

  if (!encontrada) {
    unicas.push(palavraAtual);
  }
}

console.log(unicas);