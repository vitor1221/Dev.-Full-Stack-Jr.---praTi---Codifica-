//7. Mapeamento e Ordenação
//Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice()
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome)
}

const produtos = [
  { nome: 'Mouse', preco: 50 },
  { nome: 'Teclado', preco: 80 },
  { nome: 'Monitor', preco: 300 },
  { nome: 'Cabo HDMI', preco: 30 }
]

const nomes = nomesOrdenadosPorPreco(produtos)
console.log(nomes)