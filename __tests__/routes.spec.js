'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var TestHelper = require('./test-helper');

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

  it('define module name', () =>
    TestHelper.checkModuleName('app/app.routes.js', 'app')
  );
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

  it('define module name', () =>
    TestHelper.checkModuleName('app/module/module.routes.js', 'app.module')
  );
});

describe('generator-batangularjs:routes module-name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/routes'))
      .withArguments(['module-name']);
  });

  it('creates files', () => {
    assert.file([
      'app/moduleName/module-name.routes.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/moduleName/module-name.routes.js', 'app.moduleName')
  );
});
