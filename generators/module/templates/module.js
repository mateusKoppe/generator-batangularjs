import angular from 'angular';<% if(route){ %>
import uiRouter from '@uirouter/angularjs';<% } %>

export const <%= name %>Module = angular
  .module('<%= moduleName %>', [<% if(route){ %>
    uiRouter,<% } %>
  ])<% if(route){ %>
  .config($stateProvider => {
    'ngInject';
    $stateProvider
      .state('<%= moduleName %>', {
        url: '/<%= stateUrl %>',
        component: '<%= moduleName %>',
      });
  })<% } %>
  .name;
