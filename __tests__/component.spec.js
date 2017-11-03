'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
// Var TestHelper = require('./test-helper');

describe('Testing component with camelCase module', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['userAuth']);
  });

  const fileDir = 'app/user-auth/user-auth.component.js';

  it('creates files', () => {
    assert.file([fileDir]);
  });

  it('define name', () =>
    assert.fileContent(
      fileDir,
      'export const UserAuthComponent = {'
    )
  );

  it('define template', () =>
    assert.fileContent(
      fileDir,
      'template: '
    )
  );

  it('not define templateUrl', () =>
    assert.noFileContent(
      fileDir,
      'templateUrl'
    )
  );
});

describe('Testing components with isolated template', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['userAuth'])
      .withOptions({t: true});
  });

  const fileDir = 'app/user-auth/user-auth.component.js';

  it('creates files', () => {
    assert.file([
      fileDir,
      fileDir.replace('component.js', 'component.html') // Html file
    ]);
  });

  it('not define template', () =>
    assert.noFileContent(
      fileDir,
      'template: '
    )
  );

  it('define templateUrl', () =>
    assert.fileContent(
      fileDir,
      'templateUrl'
    )
  );
});

describe('Testing components with modules folders', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['userAuth/foo/bar/fooBar'])
      .withOptions({t: true});
  });

  const fileDir = 'app/user-auth/foo/bar/foo-bar/foo-bar.component.js';

  it('creates files', () => {
    assert.file([
      fileDir,
      fileDir.replace('.component.js', '.component.html') // Html file
    ]);
  });
});
