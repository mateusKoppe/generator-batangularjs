
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
// Var TestHelper = require('./test-helper');

describe('Testing component with camelCase module', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/component'))
    .withArguments(['userAuth']));

  const fileDir = 'src/app/user-auth/user-auth.component.js';

  it('creates files', () => {
    assert.file([fileDir]);
  });

  it('define name', () => assert.fileContent(
    fileDir,
    'export const UserAuthComponent = {',
  ));

  it('define template', () => assert.fileContent(
    fileDir,
    'template: ',
  ));

  it('not define templateUrl', () => assert.noFileContent(
    fileDir,
    'templateUrl',
  ));
});

describe('Testing components with isolated template', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/component'))
    .withArguments(['userAuth'])
    .withOptions({ t: true }));

  const fileDir = 'src/app/user-auth/user-auth.component.js';

  it('creates files', () => {
    assert.file([
      fileDir,
      fileDir.replace('component.js', 'component.html'), // Html file
    ]);
  });

  it('not define template', () => assert.noFileContent(
    fileDir,
    'template: ',
  ));

  it('define templateUrl', () => assert.fileContent(
    fileDir,
    'templateUrl',
  ));
});

describe('Testing components with isolated template with another param', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/component'))
    .withArguments(['userAuth'])
    .withOptions({ template: true }));

  const fileDir = 'src/app/user-auth/user-auth.component.js';

  it('creates files', () => {
    assert.file([
      fileDir,
      fileDir.replace('component.js', 'component.html'), // Html file
    ]);
  });

  it('not define template', () => assert.noFileContent(
    fileDir,
    'template: ',
  ));

  it('define templateUrl', () => assert.fileContent(
    fileDir,
    'templateUrl',
  ));
});

describe('Testing components with modules folders', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/component'))
    .withArguments(['userAuth/foo/bar/fooBar'])
    .withOptions({ t: true }));

  const fileDir = 'src/app/user-auth/foo/bar/foo-bar/foo-bar.component.js';

  it('creates files', () => {
    assert.file([
      fileDir,
      fileDir.replace('.component.js', '.component.html'), // Html file
    ]);
  });
});

describe('Testing components with style', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/component'))
    .withArguments(['userAuth/fooBar'])
    .withOptions({ s: true }));

  const fileDir = 'src/app/user-auth/foo-bar/foo-bar.component.scss';

  it('creates files', () => {
    assert.file([
      fileDir,
    ]);
  });
});

describe('Testing components with style param describe', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/component'))
    .withArguments(['userAuth/fooBar'])
    .withOptions({ style: true }));

  const fileDir = 'src/app/user-auth/foo-bar/foo-bar.component.scss';

  it('creates files', () => {
    assert.file([
      fileDir,
    ]);
  });
});
