'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-batangularjs:module app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/module'))
      .withArguments(['app']);
  });

  it('creates files', () => {
    assert.file([
      'app/app.module.js'
    ]);
  });
});

describe('generator-batangularjs:module module', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/module'))
      .withArguments(['module']);
  });

  it('creates files', () => {
    assert.file([
      'app/module/module.module.js'
    ]);
  });
});
