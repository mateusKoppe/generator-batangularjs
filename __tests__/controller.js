'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-batangularjs:controller app name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/controller'))
      .withArguments(['app', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/name.controller.js'
    ]);
  });
});

describe('generator-batangularjs:controller module name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/controller'))
      .withArguments(['module', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/module/name.controller.js'
    ]);
  });
});
