(function() {
  'use strict';

  angular.module('app')
  .directive('calculadora', Calculadora);

  function Calculadora() {
    return {
      scope: {},
      bindToController: {
        title: '='
      },
      controller: function() {
        var self = this;

        self.valorResultado = null;
        self.operadores = {
          SOMAR: '+',
          DIMINUIR: '-',
          MULTIPLICAR: '*',
          DIVIDIR: '/'
        };

        self.resultado = function() {
          var valor1 = parseInt(self.valor1);
          var valor2 = parseInt(self.valor2);
          var operador = self.operador;

          switch (operador) {
            case self.operadores.SOMAR:
              self.valorResultado = valor1 + valor2;
              break;
            case self.operadores.DIMINUIR:
              self.valorResultado = valor1 - valor2;
              break;
            case self.operadores.MULTIPLICAR:
              self.valorResultado = valor1 * valor2;
              break;
            case self.operadores.DIVIDIR:
              self.valorResultado = valor1 / valor2;
              break;
          }
        }
      },
      templateUrl: 'app/modules/calculadora/calculadora.template.html',
      controllerAs: 'ctrl'
    }
  }
})();
