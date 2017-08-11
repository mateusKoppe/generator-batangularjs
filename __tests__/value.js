'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

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
});

describe('generator-batangularjs:value app name -t', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/value'))
      .withArguments(['app', 'name'])
			.withOptions({t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/values/name.value.js'
    ]);
  });
});

describe('generator-batangularjs:value app name -c', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/value'))
      .withArguments(['app', 'name'])
			.withOptions({c: true});
  });

  it('creates files', () => {
    assert.file([
      'app/core/name.value.js'
    ]);
  });
});

describe('generator-batangularjs:value app name -tc', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/value'))
      .withArguments(['app', 'name'])
			.withOptions({c: true, t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/core/values/name.value.js'
    ]);
  });
});
