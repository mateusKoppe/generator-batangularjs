# BatAngularJs | Yeoman Generator

generator-batangularjs is a AngularJs boilerplate, this can Scaffold out your AngularJs application and give to you a development kit.

## Install

To use BatAngularJs you will need to:

Install [`yo`](http://yeoman.io/), [`bower`](https://bower.io/):

and then install the generator

```
$ npm install -g generator-batangularjs
```

## Getting started

* Scaffold the project:

```
$ yo batangularjs
```

This will create the follow a architecture:

```
├── app
│   ├── app.module.js
│   ├── app.routes.js
│   ├── app.style.scss
│   ├── core
│   │   └── styles
│   │       ├── default.style.scss
│   │       └── variables.style.scss
│   ├── dist
│   │   ├── app.css
│   │   ├── app.css.map
│   │   ├── app.js
│   │   └── app.js.map
│   ├── index.html
│   ├── layouts
│   │   ├── home.controller.js
│   │   └── home.templatehtml
│   └── structure
│       ├── main.controller.js
│       └── main.template.html
├── bower.json
├── .bowerrc
├── .editorconfig
├── .gitignore
├── gulpfile.js
├── .jscsrc
├── package.json
├── package-lock.json
└── .yo-rc.json
```

* To start the application just hit:

```
$ npm start
```

* To build the app run:

```
$ npm run build
```

## Subgenerators
You can use the subgenerators above;
* `$ yo batangularjs:module <module>`
* `$ yo batangularjs:controller <module> <controller>`
* `$ yo batangularjs:routes <module>`
* `$ yo batangularjs:layout <module> <layout> [-t]`
* `$ yo batangularjs:component <module> <component> [-t][-c][-i]`
* `$ yo batangularjs:directive <module> <directive> [-t][-c][-i]`
* `$ yo batangularjs:factory <module> <factory> [-t][-c]`
* `$ yo batangularjs:filter <module> <filter> [-t][-c]`
* `$ yo batangularjs:value <module> <value> [<value's value>] [-t][-c]`

### Params
* `-t` will insert the file into a specific folder according to the type;
* `-c` will insert the file into `core` folder, this folder is shared with every module;
* `-i` will create two files, one javascript and one template (html);

#### Examples
Using `-t`:
```
$ yo batangularjs:factory user logout -t
```
Will result in:
```
├── app
│   ...
│   ├── user
│   |   └── logout.factory.js
...
```

Using `-c`:
```
$ yo batangularjs:filter app phone -c
```
Will result in:
```
├── app
│   ├── core
│   |   └── phone.filter.js
...
```

Using `-i`:
```
$ yo batangularjs:component user dash -i
```
Will result in:
```
├── app
│   ├── user
│   |   └── dash.component.js
│   |   └── dash.template.html
...  
```

And using many
```
$ yo batangularjs:component user toolbar -tci
```
Will result in:
```
├── app
│   ├── user
|   |   ├── core
|   |   |   ├── components
│   |   |   |   └── toolbar.component.js
│   |   |   |   └── toolbar.template.html
```

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
