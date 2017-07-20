(function(){
  'use strict';

  angular
    .module('<%= moduleName %>')
    .filter('<%= filterName %>', <%= filterName %>Filter);

  function <%= filterName %>Filter() {
    return function(input) {
      return input + '...';
    }
  }

})();
