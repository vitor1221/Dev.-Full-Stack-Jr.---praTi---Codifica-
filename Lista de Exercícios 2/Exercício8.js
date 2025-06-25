//8. Agrupamento por Propriedade
//Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
  { cliente: 'Ana', total: 100 },
  { cliente: 'Carlos', total: 200 },
  { cliente: 'Ana', total: 150 },
  { cliente: 'Beatriz', total: 300 }
]

const agrupado = vendas.reduce((acumulador, venda) => {
  const { cliente, total } = venda
  acumulador[cliente] = (acumulador[cliente] || 0) + total;
  return acumulador
}, {})

console.log(agrupado)