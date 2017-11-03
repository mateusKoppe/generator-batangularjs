import angular from 'angular';<% if(route){ %>
import uiRouter from '@uirouter/angularjs';<% } %>

export const <%= capitalizeName %>Module = angular
  .module('<%= name %>', [<% if(route){ %>
    uiRouter,<% } %>
  ])<% if(route){ %>
  .config($stateProvider => {
    'ngInject';
    $stateProvider
      .state('<%= name %>', {
        url: '/<%= name %>',
        component: '<%= name %>',
      });
  })<% } %>
  .name;
