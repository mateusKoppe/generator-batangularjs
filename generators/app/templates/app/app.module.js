import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AppComponent } from './app.component';

import './app.style.scss';

export const AppModule = angular
  .module('app', [
    uiRouter
  ])
  .component('app', AppComponent)
  .name;
