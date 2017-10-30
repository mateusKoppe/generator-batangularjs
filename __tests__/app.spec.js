'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-batangularjs:app', () => {
  beforeAll(() =>
    helpers.run(path.join(__dirname, '../generators/app'))
  );

  let files = [
    'index.html',
    'package.json',
    'webpack.config.js',
    'app/app.component.js',
    'app/app.module.js',
    'app/app.scss',
    'app/components/components.module.js',
    'app/components/home/home.module.js',
    'app/components/home/home.component.js',
    'app/components/home/home.html',
    'app/common/common.module.js'
  ];

  files.forEach(file => it(`create ${file}`, () => assert.file([file])));
});
