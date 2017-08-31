var assert = require('yeoman-assert');

module.exports = {
  checkNewModuleName(file, name) {
    assert.fileContent(
      file,
      new RegExp('\\.module\\(\'' + name + '\',\\s\\[.*\\n*.*\\]')
    );
  },

  checkModuleName(file, name) {
    assert.fileContent(
      file,
      new RegExp('\\.module\\(\'' + name + '\'\\)')
    );
  },

  checkType(file, type) {
    assert.fileContent(
      file,
      new RegExp('\\.module\\(\'[\\w\\.]*\'\\)\\n*.*\\.' + type + '\\(')
    );
  },

  checkName(file, name) {
    assert.fileContent(
      file,
      new RegExp('\\.module\\(\'[\\w\\.]*\'\\)\\n*.*\\.\\w*\\(\'' + name + '\'\\,')
    );
  }
};
