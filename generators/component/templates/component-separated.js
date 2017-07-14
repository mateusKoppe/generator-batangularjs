(function(){
  'use strict';

  angular
    .module('app.<%= moduleName %>')
    .component('<%= componentName %>', {
      templateUrl: '<%= folder %>/<%= componentName %>.template.html',
      controller: <%= capitalizeComponentName %>Controller,
      controllerAs: ''
    });

  function <%= capitalizeComponentName %>Controller() {
    let vm = this;
  }

})();
