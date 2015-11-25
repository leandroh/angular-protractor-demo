var helper = require('../helper.js');

describe('calculadora simples', function() {
  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('deve somar números', function() {
    helper.calcular(2, '+', 3);

    expect(element(by.binding('valorResultado')).getText()).toEqual('5');
  });

  it('deve subtrair números', function() {
    helper.calcular(3, '-', 2);

    expect(element(by.binding('valorResultado')).getText()).toEqual('1');
  });

  it('deve multiplicar números', function() {
    helper.calcular(3, '*', 3);

    expect(element(by.binding('valorResultado')).getText()).toEqual('9');
  });

  it('deve dividir números', function() {
    helper.calcular(6, '/', 3);

    expect(element(by.binding('valorResultado')).getText()).toEqual('2');
  });
});
