'use strict';

const Generator = require('yeoman-generator');
const Batangularjs = require('../core');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.args = args;
    this.opts = opts;
  }

  validateArgs() {
    if (!this.args.length) {
      this.env.error('Sintax error, you must use the sintax: batangularjs:directive <module>');
      return;
    }
    this.modulePath = this.args[0];
    this.directiveName = Batangularjs.upperCaseFirst(
      Batangularjs.namePath(this.modulePath)
    );
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('directive.js'),
      this.destinationPath(`${Batangularjs.fileDirPath(this.modulePath, 'directive')}`),
      {
        directiveName: this.directiveName
      }
    );
  }
};
