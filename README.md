# BatAngularJs | Yeoman Generator

> Yeoman generator for AngularJS - lets you create a angularJs app, quickly, easy and with good practives.

This generator is all that you need for set up your angularJs application.

## Install

To use BatAngularJs you will need to:

Install [`yo`](http://yeoman.io/), [`gulp`](http://gulpjs.com/), [`bower`](https://bower.io/):

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
  $ gulp server-dev
  ```

## Subgenerators

* `$ yo batangularjs:module [module]`
* `$ yo batangularjs:controller [module] [controller]`
* `$ yo batangularjs:routes [module]`
* `$ yo batangularjs:layout [module] [layout] <-t>`
* `$ yo batangularjs:component [module] [component] <-tci>`
* `$ yo batangularjs:directive [module] [directive] <-tci>`
* `$ yo batangularjs:factory [module] [factory] <-tc>`
* `$ yo batangularjs:filter [module] [filter] <-tc>`

## Gulp Tasks
* `$ gulp js` concat all your app scripts in `app/dist/app.js` (this task generate sourcemaps);
* `$ gulp css` execute your sass file and put the result in `app/dist/css.js` (this task use sourcemaps);
* `$ gulp js:watch` observe your `.js` files and run `gulp js`;
* `$ gulp css:watch` observe your `.scss` files and run `gulp css`;
* `$ gulp watch` run `js:watch` and `css:watch`;
* `$ gulp js:oldbrowser` do the same that `gulp js`, add inject in your angularJs functions and convert your ES6 functions in to ES5 functions;
* `$ gulp css:oldbrowser` do the same that `gulp css` and add prefix for old browsers;
* `$ gulp server` start your app;
* `$ gulp server-dev` run `gulp server` and `gulp watch`;
* `$ gulp prod` generate a minified verson of your website, do the same that `gulp old` and minify your files, concat your images, put your included libraries into a unique file name.
