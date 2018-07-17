
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
// Var TestHelper = require('./test-helper');

describe('Testing constant with camelCase module', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/constant'))
    .withArguments(['userAuth']));

  const fileDir = 'src/app/user-auth.constant.js';

  it('creates files', () => {
    assert.file([fileDir]);
  });

  it('define name', () => assert.fileContent(
    fileDir,
    'export const UserAuthConstant = ',
  ));
});

describe('Testing constant with succession modules', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/constant'))
    .withArguments(['userAuth/foo/bar/fooBar']));

  const fileDir = 'src/app/user-auth/foo/bar/foo-bar.constant.js';

  it('creates files', () => {
    assert.file([
      fileDir,
    ]);
  });
});

describe('Testing constant with two arguments', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/constant'))
    .withArguments(['userAuth', 'foobar']));

  const fileDir = 'src/app/user-auth.constant.js';

  it('define value', () => assert.fileContent(
    fileDir,
    'export const UserAuthConstant = \'foobar\'',
  ));
});
