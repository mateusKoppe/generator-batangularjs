import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

export const <%= capitalizeModuleName %>Module = angular
  .module('<%= moduleName %>', [
    uiRouter,
  ])<% if(route){ %>
  .config($stateProvider => {
    'ngInject';
    $stateProvider
      .state('<%= moduleName %>', {
        url: '/<%= moduleName %>',
        component: '<%= moduleName %>',
      });
  })<% } %>
  .name;