(function() {
  'use strict';

  angular.module('app')
  .controller('CalculadoraCtrl', CalculadoraCtrl);

  function CalculadoraCtrl() {
    var self = this;

    self.title = 'Calculadora simples';
  }

})();
