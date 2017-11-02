'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
// Var TestHelper = require('./test-helper');

describe('Testing filter with camelCase module', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/filter'))
      .withArguments(['userAuth']);
  });

  const fileDir = 'app/user-auth.filter.js';

  it('creates files', () => {
    assert.file([fileDir]);
  });

  it('define name', () =>
    assert.fileContent(
      fileDir,
      'export const UserAuthFilter = () =>'
    )
  );
});

describe('Testing filter with succession modules', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/filter'))
      .withArguments(['userAuth/foo/bar/fooBar']);
  });

  const fileDir = 'app/user-auth/foo/bar/foo-bar.filter.js';

  it('creates files', () => {
    assert.file([
      fileDir
    ]);
  });
});
