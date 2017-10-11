# BatAngularJs | Yeoman Generator ![GitHub](https://img.shields.io/github/stars/mateusKoppe/generator-batangularjs.svg?style=social&label=Star&maxAge=3600)

Generator-batangularjs is a AngularJs boilerplate, this scaffold out your AngularJs application and give you a development kit.

## Install

To use BatAngularJs you will need to:

Install [`yo`](http://yeoman.io/), [`bower`](https://bower.io/):

and then install the generator:

```
$ npm install -g generator-batangularjs
```

## Getting started

* Scaffold the project:

```
$ yo batangularjs
```

This will create the following architecture:

```
├── app/                                  # The primary folder
│   ├── app.module.js                     # The primary module
│   ├── app.routes.js                     # The routes of the app module
│   ├── app.style.scss                    # The main style file
│   ├── core/                             # The shared folder
│   │   └── styles/                       # The shared style of your application
│   │       ├── default.style.scss        # The style of some tags and classes
│   │       └── variables.style.scss      # Your sass variables
│   ├── dist/                             # Here will be the processed files
│   ├── index.html                        # The index of your project
│   ├── layouts/                          # The Templates and controllers
│   │   ├── home.controller.js            # The home controller
│   │   └── home.template.html            # The home template
│   └── structure/                        # The structures of your app (for routes)
│       ├── main.controller.js            # The main controller
│       └── main.template.html            # The main template
├── bower.json                            # https://bower.io/ for more info
├── .bowerrc                              # Configure the localization of the bower_components
├── .editorconfig                         # http://editorconfig.org/ for more info
├── .gitignore                            # The ignorated files and folders
├── gulpfile.js                           # https://gulpjs.com/ for more info
├── .jscsrc                               # http://jscs.info/ for more info
├── package.json                          # https://www.npmjs.com/ for more info
├── package-lock.json
└── .yo-rc.json                           # Define root of the project
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
You can use all the subgenerators above;
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
* `-c` will insert the file into `core` folder, this folder is shared for each module;
* `-i` will create two files, one javascript and one template (html);

#### Examples
* Using `-t` param:
```
$ yo batangularjs:factory user logout -t
```
Will result in:
```
├── app/
│   ...
│   ├── user/
│   |   └── logout.factory.js
...
```

* Using `-c` param:
```
$ yo batangularjs:filter app phone -c
```
Will result in:
```
├── app/
│   ├── core/
│   |   └── phone.filter.js
...
```

* Using `-i` param:
```
$ yo batangularjs:component user dash -i
```
Will result in:
```
├── app/
│   ├── user/
│   |   └── dash.component.js
│   |   └── dash.template.html
...  
```

* And using many parameters:
```
$ yo batangularjs:component user toolbar -tci
```
Will result in:
```
├── app/
│   ├── user/
|   |   ├── core/
|   |   |   ├── components/
│   |   |   |   └── toolbar.component.js
│   |   |   |   └── toolbar.template.html
```

## Gulp Tasks
* `$ gulp default` run `gulp dev`;
* `$ gulp dev` start server and watch files;
* `$ gulp server` start your app;
* `$ gulp js` concat all your app scripts in `app/dist/app.js` (this task generate sourcemaps);
* `$ gulp css` execute your sass file and put the result in `app/dist/css.js` (this task use sourcemaps);
* `$ gulp js:watch` observe your `.js` files and run `gulp js`;
* `$ gulp css:watch` observe your `.scss` files and run `gulp css`;
* `$ gulp watch` run `js:watch` and `css:watch`;
* `$ gulp build` generate a minified verson of your website, do the same that `gulp old` and minify your files, concat your images, put your included libraries into a unique file name.
* `$ gulp server-build` start your builded application;

## Contributing

Help me to improve this documentation.

Pull requests, helping others solving issues, among other tasks, are all valid, and more than welcome, contributions - don't hesitate.

When doing a Pull Request, make sure you target the `development` branch, `master` is supposed to be an *stable* branch - the changes are merged only at the end of a version.  

As for tests, run simply run `npm test` - it'll run both unit and acceptance tests.
