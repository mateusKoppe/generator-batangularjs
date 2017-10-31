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
      this.env.error('Sintax error, you must use the sintax: batangularjs:service <module>');
      return;
    }
    this.modulePath = this.args[0];
    this.serviceName = Batangularjs.upperCaseFirst(
      Batangularjs.nameByModule(this.modulePath)
    );
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('service.js'),
      this.destinationPath(`${Batangularjs.fileDirByModule(this.modulePath, 'service')}`),
      {
        serviceName: this.serviceName
      }
    );
  }
};
