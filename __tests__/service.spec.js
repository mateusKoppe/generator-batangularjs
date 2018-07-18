
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
// Var TestHelper = require('./test-helper');

describe('Testing service with camelCase module', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/service'))
    .withArguments(['userAuth']));

  const fileDir = 'src/app/user-auth.service.js';

  it('creates files', () => {
    assert.file([fileDir]);
  });

  it('define name', () => assert.fileContent(
    fileDir,
    'export class UserAuthService {',
  ));
});

describe('Testing service with succession modules', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/service'))
    .withArguments(['userAuth/foo/bar/fooBar']));

  const fileDir = 'src/app/user-auth/foo/bar/foo-bar.service.js';

  it('creates files', () => {
    assert.file([
      fileDir,
    ]);
  });
});
