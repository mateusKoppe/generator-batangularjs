import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { HomeComponent } from './home.component';

export const HomeModule = angular
  .module('home', [
    uiRouter
  ])
  .component('home', HomeComponent)
  .config($stateProvider => {
    'ngInject';
    $stateProvider
      .state('home', {
        url: '/',
        component: 'home',
      });
  })
  .name;
