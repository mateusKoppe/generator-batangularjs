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
    'app/app.module.js',
    'app/app.style.scss'
  ];

  files.forEach(file => it(`create ${file}`, () => assert.file([file])));
});
