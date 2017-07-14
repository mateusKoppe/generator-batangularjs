(function(){
  'use strict';

  angular
    .module('app.<%= moduleName %>')
    .component('<%= componentName %>', <%= componentName %>Component);

  function <%= componentName %>Component() {
    return {
      template: '',
      bindings: {},
      controller: <%= capitalizeComponentName %>Controller,
      controllerAs: '$ctrl',
      transclude: false
    }
  }

  function <%= capitalizeComponentName %>Controller() {
    let vm = this;

  }

})();
