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
      this.env.error('Sintax error, you must use the sintax: batangularjs:constant <module>');
      return;
    }
    this.modulePath = this.args[0];
    this.constantValue = this.args[1];
    this.constanteName = Batangularjs.upperCaseFirst(
      Batangularjs.nameByModule(this.modulePath)
    );
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('constant.js'),
      this.destinationPath(`${Batangularjs.fileDirByModule(this.modulePath, 'constant')}`),
      {
        constantName: this.constanteName,
        constantValue: this.constantValue
      }
    );
  }
};
