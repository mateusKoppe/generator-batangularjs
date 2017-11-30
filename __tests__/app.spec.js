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
    'webpack.config.js',
    '.editorconfig',
    '.eslintrc.js',
    '.gitignore',
    '.yo-rc.json',
    'src/index.html',
    'src/app/app.component.js',
    'src/app/app.module.js',
    'src/app/app.component.scss',
    'src/app/components/components.module.js',
    'src/app/common/common.module.js',
    'src/app/common/home/home.module.js',
    'src/app/common/home/home.component.js',
    'src/app/common/home/home.component.html',
    'src/app/common/home/home.component.scss'
  ];

  files.forEach(file => it(`create ${file}`, () => assert.file([file])));
});
