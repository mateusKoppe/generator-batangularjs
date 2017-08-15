'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.args = args;
    this.opts = opts;
  }

  validateArgs() {
    if (this.args.length < 2) {
      this.env.error('Sintax error, you must use the sintax: batangularjs:constant <module> <constant> [<[value]>] [-t][-c]');
    }
  }

  args() {
    this.module = this.args[0];
    this.constantName = this.args[1];
    this.constantValue = this.args[2] || '';

    this.moduleName = 'app';
    if (this.module !== 'app') {
      this.moduleName += `.${this.module}`;
    }
  }

  folder() {
    let moduleFolder = this.module.replace('.', '/');
    this.dest = 'app/';
    if (this.module !== 'app') {
      this.dest += `${moduleFolder}/`;
    }
    if (this.opts.c) {
      this.dest += `core/`;
    }
    if (this.opts.t) {
      this.dest += `constants/`;
    }
  }

  file() {
    this.file = `${this.constantName}.constant.js`;
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('constant.js'),
      this.destinationPath(`${this.dest}${this.file}`),
      {
        moduleName: this.moduleName,
        constantName: this.constantName,
        constantValue: this.constantValue
      }
    );
  }
};
