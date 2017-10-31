'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var TestHelper = require('./test-helper');

describe('generator-batangularjs:service app name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/service'))
      .withArguments(['app', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/name.service.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/name.service.js', 'app')
  );

  it('define type', () =>
    TestHelper.checkType('app/name.service.js', 'service')
  );

  it('define name', () =>
    TestHelper.checkName('app/name.service.js', 'name')
  );
});

describe('generator-batangularjs:service module name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/service'))
      .withArguments(['module', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/module/name.service.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/module/name.service.js', 'app.module')
  );
});

describe('generator-batangularjs:service module name -t', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/service'))
      .withArguments(['module', 'name'])
      .withOptions({t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/services/name.service.js'
    ]);
  });
});

describe('generator-batangularjs:service module name -c', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/service'))
      .withArguments(['module', 'name'])
      .withOptions({c: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/name.service.js'
    ]);
  });
});

describe('generator-batangularjs:service module name -tc', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/service'))
      .withArguments(['module', 'name'])
      .withOptions({c: true, t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/services/name.service.js'
    ]);
  });
});

describe('generator-batangularjs:service module-multiple name-multiple', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/service'))
      .withArguments(['module-multiple', 'name-multiple']);
  });

  it('creates files', () => {
    assert.file([
      'app/moduleMultiple/name-multiple.service.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/moduleMultiple/name-multiple.service.js', 'app.moduleMultiple')
  );

  it('define service name', () =>
    TestHelper.checkName('app/moduleMultiple/name-multiple.service.js', 'nameMultiple')
  );
});

describe('generator-batangularjs:service moduleMultiple nameMultiple', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/service'))
      .withArguments(['moduleMultiple', 'nameMultiple']);
  });

  it('creates files', () => {
    assert.file([
      'app/moduleMultiple/name-multiple.service.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/moduleMultiple/name-multiple.service.js', 'app.moduleMultiple')
  );

  it('define service name', () =>
    TestHelper.checkName('app/moduleMultiple/name-multiple.service.js', 'nameMultiple')
  );
});
