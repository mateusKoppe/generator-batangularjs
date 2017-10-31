'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
// Var TestHelper = require('./test-helper');

describe('Testing constant with camelCase module', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/constant'))
      .withArguments(['userAuth']);
  });

  const fileDir = 'app/components/user-auth/user-auth.constant.js';

  it('creates files', () => {
    assert.file([fileDir]);
  });

  it('define name', () =>
    assert.fileContent(
      fileDir,
      'export const UserAuthConstant = '
    )
  );
});

describe('Testing constant with succession modules', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/constant'))
      .withArguments(['userAuth.foo.bar.fooBar']);
  });

  const fileDir = 'app/components/user-auth/foo/bar/foo-bar/foo-bar.constant.js';

  it('creates files', () => {
    assert.file([
      fileDir
    ]);
  });
});

describe('Testing constant with two arguments', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/constant'))
      .withArguments(['userAuth', 'foobar']);
  });

  const fileDir = 'app/components/user-auth/user-auth.constant.js';

  it('define value', () =>
    assert.fileContent(
      fileDir,
      'export const UserAuthConstant = \'foobar\''
    )
  );
});
