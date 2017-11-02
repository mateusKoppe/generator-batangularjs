'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
// Var TestHelper = require('./test-helper');

describe('Testing module with camelCase module', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/module'))
      .withArguments(['userAuth']);
  });

  const fileDir = 'app/user-auth/user-auth.module.js';

  it('creates files', () => {
    assert.file([fileDir]);
  });

  it('define name', () =>
    assert.fileContent(
      fileDir,
      'export const UserAuthModule = angular'
    )
  );
});

describe('Testing module with route', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/module'))
      .withArguments(['userAuth'])
      .withOptions({r: true});
  });

  const fileDir = 'app/user-auth/user-auth.module.js';

  it('import uiRouter', () =>
    assert.fileContent(
      fileDir,
      'import uiRouter from \'@uirouter/angularjs\';'
    )
  );

  it('declare config', () =>
    assert.fileContent(
      fileDir,
      '.config($stateProvider => {'
    )
  );

  it('declare $stateProvider', () =>
    assert.fileContent(
      fileDir,
      '$stateProvider'
    )
  );
});

