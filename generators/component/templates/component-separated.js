(function(){
  'use strict';

  angular
    .module('app.<%= moduleName %>')
    .component('<%= componentName %>', {
      templateUrl: '<%= folder %>/<%= componentName %>.template.html',
      bindings: {},
      controller: <%= capitalizeComponentName %>Controller,
      controllerAs: '$ctrl',
      transclude: false
    });

  function <%= capitalizeComponentName %>Controller() {
    let vm = this;
  }

})();
