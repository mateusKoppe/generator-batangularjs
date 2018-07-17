
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
// Var TestHelper = require('./test-helper');

describe('Testing filter with camelCase module', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/filter'))
    .withArguments(['userAuth']));

  const fileDir = 'src/app/user-auth.filter.js';

  it('creates files', () => {
    assert.file([fileDir]);
  });

  it('define name', () => assert.fileContent(
    fileDir,
    'export const UserAuthFilter = () =>',
  ));
});

describe('Testing filter with succession modules', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/filter'))
    .withArguments(['userAuth/foo/bar/fooBar']));

  const fileDir = 'src/app/user-auth/foo/bar/foo-bar.filter.js';

  it('creates files', () => {
    assert.file([
      fileDir,
    ]);
  });
});
