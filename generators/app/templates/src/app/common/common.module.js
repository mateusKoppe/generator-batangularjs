import angular from 'angular';
import { HomeModule } from './home/home.module';

export const CommonModule = angular
  .module('common', [
    HomeModule,
  ])
  .name;
