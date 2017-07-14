(function(){
  'use strict';

  angular
    .module('app.<%= moduleName %>')
    .directive('<%= directiveName %>', <%= directiveName %>Directive);

  function <%= directiveName %>Directive() {
    return {
      restrict: 'AE',
      template: false,
      scope: {},
      transclude: false,
      link: <%= directiveName %>Link
    }
  }

  function <%= directiveName %>Link(scope, element, attrs){

  }

})();
