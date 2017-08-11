'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-batangularjs:routes app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/routes'))
      .withArguments(['app']);
  });

  it('creates files', () => {
    assert.file([
      'app/app.routes.js'
    ]);
  });
});

describe('generator-batangularjs:routes module', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/routes'))
      .withArguments(['module']);
  });

  it('creates files', () => {
    assert.file([
      'app/module/module.routes.js'
    ]);
  });
});
