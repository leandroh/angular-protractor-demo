module.exports = {
  calcular: function(valor1, operador, valor2) {
    element(by.model('ctrl.valor1')).sendKeys(valor1);
    element(by.model('ctrl.valor2')).sendKeys(valor2);
    element(by.cssContainingText('option', operador)).click();
    element(by.id('resultado')).click();
  }
};
