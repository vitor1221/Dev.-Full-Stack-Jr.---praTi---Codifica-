//9. Conversão Entre Formatos
//Escreva duas funções:
//○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
//○ objetoParaPares(obj) faz o inverso, retornando um array de pares.

// Converte array de pares para objeto
function paresParaObjeto(pares) {
  return Object.fromEntries(pares)
}

// Converte objeto para array de pares
function objetoParaPares(obj) {
  return Object.entries(obj)
}

const pares = [['nome', 'Vitor'], ['idade', 30]]
const obj = paresParaObjeto(pares)
console.log(obj)

const novoPares = objetoParaPares(obj)
console.log(novoPares)