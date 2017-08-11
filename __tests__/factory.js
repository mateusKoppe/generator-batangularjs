'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-batangularjs:factory app name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/factory'))
      .withArguments(['app', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/name.factory.js'
    ]);
  });
});

describe('generator-batangularjs:factory app name -t', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/factory'))
      .withArguments(['app', 'name'])
			.withOptions({t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/factories/name.factory.js'
    ]);
  });
});

describe('generator-batangularjs:factory app name -c', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/factory'))
      .withArguments(['app', 'name'])
			.withOptions({c: true});
  });

  it('creates files', () => {
    assert.file([
      'app/core/name.factory.js'
    ]);
  });
});

describe('generator-batangularjs:factory app name -tc', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/factory'))
      .withArguments(['app', 'name'])
			.withOptions({c: true, t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/core/factories/name.factory.js'
    ]);
  });
});
