'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var TestHelper = require('./test-helper');

describe('generator-batangularjs:value app name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/value'))
      .withArguments(['app', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/name.value.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/name.value.js', 'app')
  );

  it('define type', () =>
    TestHelper.checkType('app/name.value.js', 'value')
  );

  it('define name', () =>
    TestHelper.checkName('app/name.value.js', 'name')
  );
});

describe('generator-batangularjs:value module name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/value'))
      .withArguments(['module', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/module/name.value.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/module/name.value.js', 'app.module')
  );
});

describe('generator-batangularjs:value module name -t', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/value'))
      .withArguments(['module', 'name'])
      .withOptions({t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/values/name.value.js'
    ]);
  });
});

describe('generator-batangularjs:value module name -c', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/value'))
      .withArguments(['module', 'name'])
      .withOptions({c: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/name.value.js'
    ]);
  });
});

describe('generator-batangularjs:value module name -tc', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/value'))
      .withArguments(['module', 'name'])
      .withOptions({c: true, t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/values/name.value.js'
    ]);
  });
});

describe('generator-batangularjs:value module-multiple name-multiple', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/value'))
      .withArguments(['module-multiple', 'name-multiple']);
  });

  it('creates files', () => {
    assert.file([
      'app/moduleMultiple/name-multiple.value.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/moduleMultiple/name-multiple.value.js', 'app.moduleMultiple')
  );

  it('define value name', () =>
    TestHelper.checkName('app/moduleMultiple/name-multiple.value.js', 'nameMultiple')
  );
});

describe('generator-batangularjs:value moduleMultiple nameMultiple', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/value'))
      .withArguments(['moduleMultiple', 'nameMultiple']);
  });

  it('creates files', () => {
    assert.file([
      'app/moduleMultiple/name-multiple.value.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/moduleMultiple/name-multiple.value.js', 'app.moduleMultiple')
  );

  it('define value name', () =>
    TestHelper.checkName('app/moduleMultiple/name-multiple.value.js', 'nameMultiple')
  );
});
