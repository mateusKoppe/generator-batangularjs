
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
// Var TestHelper = require('./test-helper');

describe('Testing value with camelCase module', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/value'))
    .withArguments(['userAuth']));

  const fileDir = 'src/app/user-auth.value.js';

  it('creates files', () => {
    assert.file([fileDir]);
  });

  it('define name', () => assert.fileContent(
    fileDir,
    'export let UserAuthValue = ',
  ));
});

describe('Testing value with succession modules', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/value'))
    .withArguments(['userAuth/foo/bar/fooBar']));

  const fileDir = 'src/app/user-auth/foo/bar/foo-bar.value.js';

  it('creates files', () => {
    assert.file([
      fileDir,
    ]);
  });
});

describe('Testing value with two arguments', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/value'))
    .withArguments(['userAuth', 'foobar']));

  const fileDir = 'src/app/user-auth.value.js';

  it('define value', () => assert.fileContent(
    fileDir,
    'export let UserAuthValue = \'foobar\'',
  ));
});
