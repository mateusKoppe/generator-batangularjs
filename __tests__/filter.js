'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-batangularjs:filter app name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/filter'))
      .withArguments(['app', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/name.filter.js'
    ]);
  });
});

describe('generator-batangularjs:filter app name -t', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/filter'))
      .withArguments(['app', 'name'])
			.withOptions({t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/filters/name.filter.js'
    ]);
  });
});

describe('generator-batangularjs:filter app name -c', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/filter'))
      .withArguments(['app', 'name'])
			.withOptions({c: true});
  });

  it('creates files', () => {
    assert.file([
      'app/core/name.filter.js'
    ]);
  });
});

describe('generator-batangularjs:filter app name -tc', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/filter'))
      .withArguments(['app', 'name'])
			.withOptions({c: true, t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/core/filters/name.filter.js'
    ]);
  });
});
