'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var TestHelper = require('./test-helper');

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

  it('define module name', () =>
    TestHelper.checkModuleName('app/name.controller.js', 'app')
  );

  it('define type', () =>
    TestHelper.checkType('app/name.controller.js', 'controller')
  );

  it('define name', () =>
    TestHelper.checkName('app/name.controller.js', 'NameController')
  );
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

  it('define module name', () =>
    TestHelper.checkModuleName('app/module/name.controller.js', 'app.module')
  );
});

describe('generator-batangularjs:controller module-multiple name-multiple', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/controller'))
      .withArguments(['module-multiple', 'name-multiple']);
  });

  it('creates files', () => {
    assert.file([
      'app/moduleMultiple/name-multiple.controller.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/moduleMultiple/name-multiple.controller.js', 'app.moduleMultiple')
  );

  it('define controller name', () =>
    TestHelper.checkName('app/moduleMultiple/name-multiple.controller.js', 'NameMultipleController')
  );
});

describe('generator-batangularjs:controller moduleMultiple nameMultiple', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/controller'))
      .withArguments(['moduleMultiple', 'nameMultiple']);
  });

  it('creates files', () => {
    assert.file([
      'app/moduleMultiple/name-multiple.controller.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/moduleMultiple/name-multiple.controller.js', 'app.moduleMultiple')
  );

  it('define controller name', () =>
    TestHelper.checkName('app/moduleMultiple/name-multiple.controller.js', 'NameMultipleController')
  );
});
