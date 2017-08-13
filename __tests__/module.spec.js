'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var TestHelper = require('./test-helper');

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

	it('define module name', () =>
		TestHelper.checkNewModuleName('app/app.module.js', 'app')
	)
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

	it('define module name', () =>
		TestHelper.checkNewModuleName('app/module/module.module.js', 'app.module')
	)
});
