(function(){
  'use strict';

  angular
    .module('<%= moduleName %>')
    .factory('<%= factoryName %>', <%= factoryName %>Factory);

  function <%= factoryName %>Factory() {
    let factory = {};

    factory.method = () => {};

    return factory;
  }

})();
