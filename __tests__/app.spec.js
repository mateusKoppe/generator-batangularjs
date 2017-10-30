'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-batangularjs:app', () => {
  beforeAll(() =>
    helpers.run(path.join(__dirname, '../generators/app'))
  );

  let files = [
    'package.json',
    'app/app.module.js',
    'app/app.routes.js',
    'app/app.style.scss',
    'app/core/styles/default.style.scss',
    'app/core/styles/variables.style.scss',
    'app/layouts/home.controller.js',
    'app/layouts/home.template.html',
    'app/structure/main.controller.js',
    'app/structure/main.template.html'
  ];

  files.forEach(file => it(`create ${file}`, () => assert.file([file])));
});
