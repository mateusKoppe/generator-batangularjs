'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

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
      'app/name.template.html',
    ]);
  });
});

describe('generator-batangularjs:directive module name -i', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/directive'))
      .withArguments(['module', 'name'])
      .withOptions({i: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/name.directive.js',
      'app/module/name.template.html',
    ]);
  });
});

describe('generator-batangularjs:directive module name -it', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/directive'))
      .withArguments(['module', 'name'])
      .withOptions({t: true, i: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/directives/name.directive.js',
      'app/module/directives/name.template.html',
    ]);
  });
});

describe('generator-batangularjs:directive module name -ic', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/directive'))
      .withArguments(['module', 'name'])
      .withOptions({c: true, i: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/name.directive.js',
      'app/module/core/name.template.html',
    ]);
  });
});

describe('generator-batangularjs:directive module name -itc', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/directive'))
      .withArguments(['module', 'name'])
      .withOptions({c: true, t: true, i: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/directives/name.directive.js',
      'app/module/core/directives/name.template.html',
    ]);
  });
});
