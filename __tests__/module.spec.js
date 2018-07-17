
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
// Var TestHelper = require('./test-helper');

describe('Testing module with camelCase module', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/module'))
    .withArguments(['userAuth']));

  const fileDir = 'src/app/user-auth/user-auth.module.js';

  it('creates files', () => {
    assert.file([fileDir]);
  });

  it('define name', () => assert.fileContent(
    fileDir,
    'export const UserAuthModule = angular',
  ));
});

describe('Testing module with route', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/module'))
    .withArguments(['userAuth'])
    .withOptions({ r: true }));

  const fileDir = 'src/app/user-auth/user-auth.module.js';

  it('import uiRouter', () => assert.fileContent(
    fileDir,
    'import uiRouter from \'@uirouter/angularjs\';',
  ));

  it('declare config', () => assert.fileContent(
    fileDir,
    '.config($stateProvider => {',
  ));

  it('declare $stateProvider', () => assert.fileContent(
    fileDir,
    '$stateProvider',
  ));
});

describe('Testing module with component', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/module'))
    .withArguments(['userAuth'])
    .withOptions({ c: true }));

  const fileDir = 'src/app/user-auth/user-auth.component.js';
  const moduleDir = 'src/app/user-auth/user-auth.module.js';

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

  it('import component', () => {
    assert.fileContent(
      moduleDir,
      'import { UserAuthComponent } from \'./user-auth.component\';',
    );
    assert.fileContent(
      moduleDir,
      '.component(\'userAuth\', UserAuthComponent)',
    );
  });
});

describe('Testing module with components and template', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/module'))
    .withArguments(['userAuth'])
    .withOptions({ c: true, t: true }));

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

describe('Testing module with components and template using another params', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/module'))
    .withArguments(['userAuth'])
    .withOptions({ component: true, template: true }));

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

describe('Testing module with style', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/module'))
    .withArguments(['userAuth'])
    .withOptions({ s: true }));

  const fileDir = 'src/app/user-auth/user-auth.component.scss';

  it('creates files', () => {
    assert.file([
      fileDir,
    ]);
  });
});

describe('Testing module with style using describe param', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/module'))
    .withArguments(['userAuth'])
    .withOptions({ style: true }));

  const fileDir = 'src/app/user-auth/user-auth.component.scss';

  it('creates files', () => {
    assert.file([
      fileDir,
    ]);
  });
});
