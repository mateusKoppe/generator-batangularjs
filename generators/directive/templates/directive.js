(function(){
  'use strict';

  angular
    .module('<%= moduleName %>')
    .directive('<%= directiveName %>', <%= directiveName %>Directive);

  function <%= directiveName %>Directive() {
    return {
      restrict: 'AE',
      scope: {},
      transclude: false,
      link: <%= directiveName %>Link
    }

		function <%= directiveName %>Link(scope, element, attrs){

		}
  }

})();
