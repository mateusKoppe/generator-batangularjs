'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-batangularjs:constant app name', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/constant'))
      .withArguments(['app', 'name']);
  });

  it('creates files', () => {
    assert.file([
      'app/name.constant.js'
    ]);
  });
});

describe('generator-batangularjs:constant app name -t', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/constant'))
      .withArguments(['app', 'name'])
			.withOptions({t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/constants/name.constant.js'
    ]);
  });
});

describe('generator-batangularjs:constant app name -c', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/constant'))
      .withArguments(['app', 'name'])
			.withOptions({c: true});
  });

  it('creates files', () => {
    assert.file([
      'app/core/name.constant.js'
    ]);
  });
});

describe('generator-batangularjs:constant app name -tc', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/constant'))
      .withArguments(['app', 'name'])
			.withOptions({c: true, t: true});
  });

  it('creates files', () => {
    assert.file([
      'app/core/constants/name.constant.js'
    ]);
  });
});
