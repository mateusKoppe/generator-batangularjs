'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var TestHelper = require('./test-helper');

describe('generator-batangularjs:directive app name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/directive'))
      .withArguments(['app', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/name.directive.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/name.directive.js', 'app')
  );

  it('define type', () =>
    TestHelper.checkType('app/name.directive.js', 'directive')
  );

  it('define name', () =>
    TestHelper.checkName('app/name.directive.js', 'name')
  );
});

describe('generator-batangularjs:directive module name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/directive'))
      .withArguments(['module', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/module/name.directive.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/module/name.directive.js', 'app.module')
  );
});

describe('generator-batangularjs:directive module name -t', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/directive'))
      .withArguments(['module', 'name'])
      .withOptions({t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/directives/name.directive.js'
    ]);
  });
});

describe('generator-batangularjs:directive module name -c', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/directive'))
      .withArguments(['module', 'name'])
      .withOptions({c: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/name.directive.js'
    ]);
  });
});

describe('generator-batangularjs:directive module name -tc', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/directive'))
      .withArguments(['module', 'name'])
      .withOptions({c: true, t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/directives/name.directive.js'
    ]);
  });
});

describe('generator-batangularjs:directive app name -i', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/directive'))
      .withArguments(['app', 'name'])
      .withOptions({i: true});
  });

  it('creates files', () => {
    assert.file([
      'app/name.directive.js',
      'app/name.template.html'
    ]);
  });
});

describe('generator-batangularjs:directive module-multiple name-multiple', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/directive'))
      .withArguments(['module-multiple', 'name-multiple']);
  });

  it('creates files', () => {
    assert.file([
      'app/moduleMultiple/name-multiple.directive.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/moduleMultiple/name-multiple.directive.js', 'app.moduleMultiple')
  );

  it('define directive name', () =>
    TestHelper.checkName('app/moduleMultiple/name-multiple.directive.js', 'nameMultiple')
  );
});

describe('generator-batangularjs:directive moduleMultiple nameMultiple', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/directive'))
      .withArguments(['moduleMultiple', 'nameMultiple']);
  });

  it('creates files', () => {
    assert.file([
      'app/moduleMultiple/name-multiple.directive.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/moduleMultiple/name-multiple.directive.js', 'app.moduleMultiple')
  );

  it('define directive name', () =>
    TestHelper.checkName('app/moduleMultiple/name-multiple.directive.js', 'nameMultiple')
  );
});
