(function(){
  'use strict';

  angular
    .module('app.<%= moduleName %>')
    .controller('<%= controllerName %>Controller', <%= controllerName %>Controller);

  function <%= controllerName %>Controller() {
    let vm = this;

  }

})();
