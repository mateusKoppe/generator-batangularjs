(function(){
  'use strict';

  angular
    .module('app.<%= moduleName %>')
    .filter('<%= filterName %>', <%= filterName %>Filter);

  function <%= filterName %>Filter() {
    return function(input) {
      return input + '...';
    }
  }

})();
