'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var TestHelper = require('./test-helper');

describe('generator-batangularjs:component app name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['app', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/name.component.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/name.component.js', 'app')
  );

  it('define type', () =>
    TestHelper.checkType('app/name.component.js', 'component')
  );

  it('define name', () =>
    TestHelper.checkName('app/name.component.js', 'name')
  );
});

describe('generator-batangularjs:component module name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['module', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/module/name.component.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/module/name.component.js', 'app.module')
  );
});

describe('generator-batangularjs:component module name -t', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['module', 'name'])
      .withOptions({t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/components/name.component.js'
    ]);
  });
});

describe('generator-batangularjs:component module name -c', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['module', 'name'])
      .withOptions({c: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/name.component.js'
    ]);
  });
});

describe('generator-batangularjs:component module name -tc', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['module', 'name'])
      .withOptions({c: true, t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/components/name.component.js'
    ]);
  });
});

describe('generator-batangularjs:component app name -i', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['app', 'name'])
      .withOptions({i: true});
  });

  it('creates files', () => {
    assert.file([
      'app/name.component.js',
      'app/name.template.html'
    ]);
  });
});

describe('generator-batangularjs:component module-multiple name-multiple', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['module-multiple', 'name-multiple']);
  });

  it('creates files', () => {
    assert.file([
      'app/moduleMultiple/name-multiple.component.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/moduleMultiple/name-multiple.component.js', 'app.moduleMultiple')
  );

  it('define component name', () =>
    TestHelper.checkName('app/moduleMultiple/name-multiple.component.js', 'nameMultiple')
  );
});

describe('generator-batangularjs:component moduleMultiple nameMultiple', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['moduleMultiple', 'nameMultiple']);
  });

  it('creates files', () => {
    assert.file([
      'app/moduleMultiple/name-multiple.component.js'
    ]);
  });

  it('define module name', () =>
    TestHelper.checkModuleName('app/moduleMultiple/name-multiple.component.js', 'app.moduleMultiple')
  );

  it('define component name', () =>
    TestHelper.checkName('app/moduleMultiple/name-multiple.component.js', 'nameMultiple')
  );
});
