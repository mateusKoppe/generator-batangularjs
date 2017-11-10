'use strict';
const Batangularjs = require('../generators/core');

let conventionTest = (callback, toBe) => {
  expect(callback('test-multiple-words')).toBe(toBe);
  expect(callback('test_multiple_words')).toBe(toBe);
  expect(callback('Test_multiple_words')).toBe(toBe);
  expect(callback('TestMultipleWords')).toBe(toBe);
};

test('camelCase', () => conventionTest(Batangularjs.camelCase, 'testMultipleWords'));
test('kebabCase', () => conventionTest(Batangularjs.kebabCase, 'test-multiple-words'));

test('upperCaseFirst', () => {
  expect(Batangularjs.upperCaseFirst('testword')).toBe('Testword');
  expect(Batangularjs.upperCaseFirst('test word')).toBe('Test word');
  expect(Batangularjs.upperCaseFirst('tEsTWoRd')).toBe('TEsTWoRd');
  expect(Batangularjs.upperCaseFirst('test-test')).toBe('Test-test');
  expect(Batangularjs.upperCaseFirst('TestTest')).toBe('TestTest');
});

test('lowerCaseFirst', () => {
  expect(Batangularjs.lowerCaseFirst('testword')).toBe('testword');
  expect(Batangularjs.lowerCaseFirst('test word')).toBe('test word');
  expect(Batangularjs.lowerCaseFirst('tEsTWoRd')).toBe('tEsTWoRd');
  expect(Batangularjs.lowerCaseFirst('test-test')).toBe('test-test');
  expect(Batangularjs.lowerCaseFirst('TestTest')).toBe('testTest');
});

test('folderPath', () => {
  expect(Batangularjs.folderPath('foo/bar/foo')).toBe('src/app/foo/bar');
  expect(Batangularjs.folderPath('fooBar/foo')).toBe('src/app/foo-bar');
  expect(Batangularjs.folderPath('fooBar')).toBe('src/app');
});

test('namePath', () => {
  expect(Batangularjs.namePath('foo/bar/foo')).toBe('foo');
  expect(Batangularjs.namePath('bar/foo-bar')).toBe('fooBar');
  expect(Batangularjs.namePath('bar/fooBar')).toBe('fooBar');
});

test('fileDirPath', () => {
  let path = 'foo/bar/fooBar';
  expect(Batangularjs.fileDirPath(path, 'component', true))
    .toBe('src/app/foo/bar/foo-bar/foo-bar.component.js');

  expect(Batangularjs.fileDirPath(path, 'constant'))
    .toBe('src/app/foo/bar/foo-bar.constant.js');

  expect(Batangularjs.fileDirPath(path, 'directive'))
    .toBe('src/app/foo/bar/foo-bar.directive.js');

  expect(Batangularjs.fileDirPath(path, 'filter'))
    .toBe('src/app/foo/bar/foo-bar.filter.js');

  expect(Batangularjs.fileDirPath(path, 'module', true))
    .toBe('src/app/foo/bar/foo-bar/foo-bar.module.js');

  expect(Batangularjs.fileDirPath(path, 'service'))
    .toBe('src/app/foo/bar/foo-bar.service.js');

  expect(Batangularjs.fileDirPath(path, 'value'))
    .toBe('src/app/foo/bar/foo-bar.value.js');
});
