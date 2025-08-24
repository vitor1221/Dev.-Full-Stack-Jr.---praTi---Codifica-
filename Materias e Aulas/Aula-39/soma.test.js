const soma = require('./soma')

test('Soma 2 + 3 deve ser igual a 5', () =>{
    expect(soma(2, 3)).toBe(5)
})

test('soma -1 + 1 deve ser igual a 0', () =>{
    expect(soma(-1, 1)).toBe(0)
})

test('soma 3 + 3 deve ser igual a 6', () =>{
    expect(soma(3, 3)).toBe(6)
})