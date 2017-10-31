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

test('folderByModule', () => {
  expect(Batangularjs.folderByModule('foo.bar.foo')).toBe('app/components/foo/bar/foo');
  expect(Batangularjs.folderByModule('fooBar.foo')).toBe('app/components/foo-bar/foo');
});

test('nameByModule', () => {
  expect(Batangularjs.nameByModule('foo.bar.foo')).toBe('foo');
  expect(Batangularjs.nameByModule('bar.foo-bar')).toBe('fooBar');
  expect(Batangularjs.nameByModule('bar.fooBar')).toBe('fooBar');
});

test('fileDirByModule', () => {
  expect(Batangularjs.fileDirByModule('foo.bar.foo', 'component'))
    .toBe('app/components/foo/bar/foo/foo.component.js');
  expect(Batangularjs.fileDirByModule('foo.bar.fooBar', 'module'))
    .toBe('app/components/foo/bar/foo-bar/foo-bar.module.js');
  expect(Batangularjs.fileDirByModule('foo.fooBar', 'directive'))
    .toBe('app/components/foo/foo-bar/foo-bar.directive.js');
});
