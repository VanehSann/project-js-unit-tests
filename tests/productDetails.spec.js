const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(typeof productDetails().entries()).toBe('object');
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails().length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('comida', 'casa').keys()).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // If it should pass with deep equality, replace "toBe" with "toStrictEqual"
    expect(productDetails('lado', 'lados')).toStrictEqual([{"details": {"productId": "lado123"}, "name": "lado"}, {"details": {"productId": "lados123"}, "name": "lados"}]);
    expect(productDetails('ladorA', 'ladosA')).toStrictEqual([{"details": {"productId": "ladorA123"}, "name": "ladorA"}, {"details": {"productId": "ladosA123"}, "name": "ladosA"}]);
    // Teste se os dois productIds terminam com 123.
    // esse codigo também valida se está igual
    expect(productDetails('euAmo', 'comer')).toStrictEqual([{"details": {"productId": "euAmo123"}, "name": "euAmo"}, {"details": {"productId": "comer123"}, "name": "comer"}]);
  });
});
