'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
// Var TestHelper = require('./test-helper');

describe('Testing service with camelCase module', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/service'))
      .withArguments(['userAuth']);
  });

  const fileDir = 'app/components/user-auth/user-auth.service.js';

  it('creates files', () => {
    assert.file([fileDir]);
  });

  it('define name', () =>
    assert.fileContent(
      fileDir,
      'export class UserAuthService {'
    )
  );
});

describe('Testing service with succession modules', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/service'))
      .withArguments(['userAuth.foo.bar.fooBar']);
  });

  const fileDir = 'app/components/user-auth/foo/bar/foo-bar/foo-bar.service.js';

  it('creates files', () => {
    assert.file([
      fileDir
    ]);
  });
});
