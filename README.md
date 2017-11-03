# BatAngularJs | Yeoman Generator [![Build Status](https://travis-ci.org/mateusKoppe/generator-batangularjs.svg?branch=development)](https://travis-ci.org/mateusKoppe/generator-batangularjs)

Generator-batangularjs is a awesome AngularJs generator, that scaffold your AngularJs application and give to you a awesome development kit with subgenerators, webpack, eslint and ES2015 features!

Based on [angular-cli](https://github.com/angular/angular-cli) and [Todd Motto - AngularJS styleguide (ES2015)](https://github.com/toddmotto/angularjs-styleguide).

## Install

To use BatAngularJs you will need to:

Install [`yo`](http://yeoman.io/)

then install the generator:

```
$ npm install -g generator-batangularjs
```

## Getting started
```
$ yo batangularjs
```

This will create the following architecture:

```
├── app/                                  # The primary folder
│   ├── common/                           # Common module
│   │   └── common.module.js
│   ├── components/                       # components module
│   │   ├── components.module.js
│   │   ├── home/                         # Home module
│   ├── app.component.js                  # The main component
│   ├── app.module.js                     # The main module
│   ├── app.scss                          # The main style file
├── index.html
├── webpack.config.js                     # https://webpack.js.org/ for more info
├── package.json
├── package-lock.json
├── .editorconfig                         # http://editorconfig.org/ for more info
├── .eslintrc.js                          # https://eslint.org/ for more info
├── .gitignore
└── .yo-rc.json                           # Define root of the project
```

* To start the application just hit:

```
$ npm start
```

* To run esling:

```
$ npm run lint
```

* To build the app run:

```
$ npm run build
```

## Subgenerators
You can use all the subgenerators above;
* `$ yo batangularjs:module <module> [-r][-c][-t]`
* `$ yo batangularjs:component <module> [-t]`
* `$ yo batangularjs:constant <module> <value> [<value's value>]`
* `$ yo batangularjs:directive <module>`
* `$ yo batangularjs:filter <module>`
* `$ yo batangularjs:services <module>`
* `$ yo batangularjs:value <module> <value> [<value's value>]`

## Contributing

Help me to improve this documentation.

Pull requests, helping others solving issues, among other tasks, are all valid, and more than welcome, contributions - don't hesitate.
