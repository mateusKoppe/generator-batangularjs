(function(){
  'use strict';

  angular
    .module('app.<%= moduleName %>')
    .factory('<%= factoryName %>', <%= factoryName %>Factory);

  function <%= factoryName %>Factory() {
    let factory = {};

    factory.method = () => {};

    return factory;
  }

})();
