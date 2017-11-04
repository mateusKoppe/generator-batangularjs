import angular from 'angular';
import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import './app.component.scss';

export const AppModule = angular
  .module('app', [
    CommonModule,
    ComponentsModule,
  ])
  .component('app', AppComponent)
  .config(($locationProvider, $urlRouterProvider) => {
    'ngInject';
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/');
  })
  .name;
