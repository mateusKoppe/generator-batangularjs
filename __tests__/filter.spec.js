'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var TestHelper = require('./test-helper');

describe('generator-batangularjs:filter app name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/filter'))
      .withArguments(['app', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/name.filter.js'
    ]);
  });

	it('define module name', () =>
		TestHelper.checkModuleName('app/name.filter.js', 'app')
	)

	it('define type', () =>
		TestHelper.checkType('app/name.filter.js', 'filter')
	)

	it('define name', () =>
		TestHelper.checkName('app/name.filter.js', 'name')
	)
});

describe('generator-batangularjs:filter module name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/filter'))
      .withArguments(['module', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/module/name.filter.js'
    ]);
  });

	it('define module name', () =>
		TestHelper.checkModuleName('app/module/name.filter.js', 'app.module')
	)
});

describe('generator-batangularjs:filter module name -t', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/filter'))
      .withArguments(['module', 'name'])
      .withOptions({t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/filters/name.filter.js'
    ]);
  });
});

describe('generator-batangularjs:filter module name -c', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/filter'))
      .withArguments(['module', 'name'])
      .withOptions({c: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/name.filter.js'
    ]);
  });
});

describe('generator-batangularjs:filter module name -tc', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/filter'))
      .withArguments(['module', 'name'])
      .withOptions({c: true, t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/filters/name.filter.js'
    ]);
  });
});
