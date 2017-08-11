'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

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
      'app/name.template.html',
    ]);
  });
});

describe('generator-batangularjs:component module name -i', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['module', 'name'])
      .withOptions({i: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/name.component.js',
      'app/module/name.template.html',
    ]);
  });
});

describe('generator-batangularjs:component module name -it', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['module', 'name'])
      .withOptions({t: true, i: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/components/name.component.js',
      'app/module/components/name.template.html',
    ]);
  });
});

describe('generator-batangularjs:component module name -ic', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['module', 'name'])
      .withOptions({c: true, i: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/name.component.js',
      'app/module/core/name.template.html',
    ]);
  });
});

describe('generator-batangularjs:component module name -itc', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['module', 'name'])
      .withOptions({c: true, t: true, i: true});
  });

  it('creates files', () => {
    assert.file([
      'app/module/core/components/name.component.js',
      'app/module/core/components/name.template.html',
    ]);
  });
});
