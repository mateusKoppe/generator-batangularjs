import angular from 'angular';
import { HomeModule } from './home/home.module';

export const ComponentsModule = angular
  .module('components', [
    HomeModule,
  ])
  .name;
