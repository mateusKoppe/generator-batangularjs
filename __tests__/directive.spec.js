
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
// Var TestHelper = require('./test-helper');

describe('Testing directive with camelCase module', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/directive'))
    .withArguments(['userAuth']));

  const fileDir = 'src/app/user-auth.directive.js';

  it('creates files', () => {
    assert.file([fileDir]);
  });

  it('define name', () => assert.fileContent(
    fileDir,
    'export const UserAuthDirective = () => {',
  ));
});

describe('Testing directive with succession modules', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/directive'))
    .withArguments(['userAuth/foo/bar/fooBar']));

  const fileDir = 'src/app/user-auth/foo/bar/foo-bar.directive.js';

  it('creates files', () => {
    assert.file([
      fileDir,
    ]);
  });
});
