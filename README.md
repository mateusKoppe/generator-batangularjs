# BatAngularJs | Yeoman Generator

> generator-batangularjs creates a base to start a new angular.js application.


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

* Then start the application:

  ```
  $ npm start
  ```

* To build the app run:

 	```
	$ npm run build
	```

## Subgenerators
* `$ yo batangularjs:module <module>`
* `$ yo batangularjs:controller <module> <controller>`
* `$ yo batangularjs:routes <module>`
* `$ yo batangularjs:layout <module> <layout> [-t]`
* `$ yo batangularjs:component <module> <component> [-t][-c][-i]`
* `$ yo batangularjs:directive <module> <directive> [-t][-c][-i]`
* `$ yo batangularjs:factory <module> <factory> [-t][-c]`
* `$ yo batangularjs:filter <module> <filter> [-t][-c]`
* `$ yo batangularjs:value <module> <value> [<value's value>] [-t][-c]`

## Gulp Tasks
* `$ gulp default` run `gulp dev`;
* `$ gulp dev` Start server and watch files;
* `$ gulp server` start your app;
* `$ gulp js` concat all your app scripts in `app/dist/app.js` (this task generate sourcemaps);
* `$ gulp css` execute your sass file and put the result in `app/dist/css.js` (this task use sourcemaps);
* `$ gulp js:watch` observe your `.js` files and run `gulp js`;
* `$ gulp css:watch` observe your `.scss` files and run `gulp css`;
* `$ gulp watch` run `js:watch` and `css:watch`;
* `$ gulp build` generate a minified verson of your website, do the same that `gulp old` and minify your files, concat your images, put your included libraries into a unique file name.
* `$ gulp server-build` start your builded application;
