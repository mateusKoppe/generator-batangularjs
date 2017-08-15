'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var TestHelper = require('./test-helper');

describe('generator-batangularjs:layout app name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/layout'))
      .withArguments(['app', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/name.controller.js',
      'app/name.template.html'
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

describe('generator-batangularjs:layout module name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/layout'))
      .withArguments(['module', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/module/name.controller.js',
      'app/module/name.template.html'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/module/name.controller.js', 'app.module')
  );
});

describe('generator-batangularjs:layout module name -t', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/layout'))
      .withArguments(['module', 'name'])
      .withOptions({t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/layouts/name.controller.js',
      'app/module/layouts/name.template.html'
    ]);
  });
});
