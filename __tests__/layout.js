'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-batangularjs:layout app name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/layout'))
      .withArguments(['app', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/name.controller.js',
      'app/name.template.html',
    ]);
  });
});

describe('generator-batangularjs:layout app name -t', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/layout'))
      .withArguments(['app', 'name'])
			.withOptions({t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/layouts/name.controller.js',
      'app/layouts/name.template.html',
    ]);
  });
});

describe('generator-batangularjs:layout module name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/layout'))
      .withArguments(['module', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/module/name.controller.js',
      'app/module/name.template.html',
    ]);
  });
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
      'app/module/layouts/name.template.html',
    ]);
  });
});
