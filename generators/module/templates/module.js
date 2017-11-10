import angular from 'angular';<% if(route){ %>
import uiRouter from '@uirouter/angularjs';<% } %><% if(component){ %>

import { <%= name %>Component } from '<%= file %>.component';<% } %>

export const <%= name %>Module = angular
  .module('<%= moduleName %>', [<% if(route){ %>
    uiRouter,<% } %>
  ])<% if(component){ %>
  .component('<%= moduleName %>', <%= name %>Component)<% } %><% if(route){ %>
  .config($stateProvider => {
    'ngInject';
    $stateProvider
      .state('<%= moduleName %>', {
        url: '/<%= stateUrl %>',
        component: '<%= moduleName %>',
      });
  })<% } %>
  .name;
