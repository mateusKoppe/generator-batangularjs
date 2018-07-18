
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-batangularjs:app', () => {
  beforeAll(() => helpers.run(path.join(__dirname, '../generators/app')));

  const files = [
    'package.json',
    'package-lock.json',
    'webpack.config.js',
    '.editorconfig',
    '.eslintrc.js',
    '.gitignore',
    '.yo-rc.json',
    'src/index.html',
    'src/app/app.component.js',
    'src/app/app.module.js',
    'src/app/app.component.scss',
    'src/app/common/common.module.js',
    'src/app/components/components.module.js',
    'src/app/components/home/home.module.js',
    'src/app/components/home/home.component.js',
    'src/app/components/home/home.component.html',
    'src/app/components/home/home.component.scss',
  ];

  files.forEach(file => it(`create ${file}`, () => assert.file([file])));
});
