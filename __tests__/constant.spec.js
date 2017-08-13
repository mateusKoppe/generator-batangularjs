'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var TestHelper = require('./test-helper');

describe('generator-batangularjs:constant app name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/constant'))
      .withArguments(['app', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/name.constant.js'
    ]);
  });

	it('define module name', () =>
		TestHelper.checkModuleName('app/name.constant.js', 'app')
	)

	it('define type', () =>
		TestHelper.checkType('app/name.constant.js', 'constant')
	)

	it('define name', () =>
		TestHelper.checkName('app/name.constant.js', 'name')
	)
});

describe('generator-batangularjs:constant module name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/constant'))
      .withArguments(['module', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/module/name.constant.js'
    ]);
  });

	it('define module name', () =>
		TestHelper.checkModuleName('app/module/name.constant.js', 'app.module')
	)
});

describe('generator-batangularjs:constant module name -t', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/constant'))
      .withArguments(['module', 'name'])
      .withOptions({t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/constants/name.constant.js'
    ]);
  });
});

describe('generator-batangularjs:constant module name -c', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/constant'))
      .withArguments(['module', 'name'])
      .withOptions({c: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/name.constant.js'
    ]);
  });
});

describe('generator-batangularjs:constant module name -tc', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/constant'))
      .withArguments(['module', 'name'])
      .withOptions({c: true, t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/constants/name.constant.js'
    ]);
  });
});
