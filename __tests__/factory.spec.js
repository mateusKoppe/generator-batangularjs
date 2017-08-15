'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var TestHelper = require('./test-helper');

describe('generator-batangularjs:factory app name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/factory'))
      .withArguments(['app', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/name.factory.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/name.factory.js', 'app')
  );

  it('define type', () =>
    TestHelper.checkType('app/name.factory.js', 'factory')
  );

  it('define name', () =>
    TestHelper.checkName('app/name.factory.js', 'name')
  );
});

describe('generator-batangularjs:factory module name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/factory'))
      .withArguments(['module', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/module/name.factory.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/module/name.factory.js', 'app.module')
  );
});

describe('generator-batangularjs:factory module name -t', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/factory'))
      .withArguments(['module', 'name'])
      .withOptions({t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/factories/name.factory.js'
    ]);
  });
});

describe('generator-batangularjs:factory module name -c', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/factory'))
      .withArguments(['module', 'name'])
      .withOptions({c: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/name.factory.js'
    ]);
  });
});

describe('generator-batangularjs:factory module name -tc', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/factory'))
      .withArguments(['module', 'name'])
      .withOptions({c: true, t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/factories/name.factory.js'
    ]);
  });
});
