# BatAngularJs | Yeoman Generator

> Yeoman generator for AngularJS - lets you create a angularJs app, quickly, easy and with good practives.

This generator is all that you need for set up your angularJs application.

## Install

To use BatAngularJs you will need to:

Install `yo`, `gulp-cli`, `bower`:

and then install the generator

```
$ npm install -g generator-batangularjs
```

## Getting started

* Scaffold the project:

  ```
  $ yo batangularjs
  ```

* If you created your project out of the `.` folder, use `cd` and run:

  ```
  $ npm i && bower i
  ```

* Then start the application:

  ```
  $ gulp serve-dev
  ```

## Subgenerators

```
$ yo batangularjs:module [module]
$ yo batangularjs:controller [module] [controller]
$ yo batangularjs:component [module] [component] <-ti>
$ yo batangularjs:directive [module] [directive] <-ti>
$ yo batangularjs:factory [module] [factory] <-t>
$ yo batangularjs:filter [module] [filter] <-t>
```

MIT © Mateus Koppe
