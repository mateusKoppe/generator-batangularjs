(function(){
  'use strict';

  angular
    .module('<%= moduleName %>')
    .controller('<%= controllerName %>Controller', <%= controllerName %>Controller);

  function <%= controllerName %>Controller() {
    let vm = this;

  }

})();
