import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';

export const AppModule = angular
  .module('app', [
    uiRouter,
    HomeModule,
  ])
  .component('app', AppComponent)
  .config(($locationProvider, $urlRouterProvider) => {
    'ngInject';
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/');
  })
  .name;
