(function(){
  'use strict';

  angular
    .module('app.<%= moduleName %>')
    .component('<%= componentName %>', {
      template: '',
      controller: <%= capitalizeComponentName %>Controller,
      controllerAs: ''
    });

  function <%= capitalizeComponentName %>Controller() {
    let vm = this;

  }

})();
