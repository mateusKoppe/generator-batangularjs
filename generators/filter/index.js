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
    if (this.args.length < 2) {
      this.env.error('Sintax error, you must use the sintax: batangularjs:filter <module> <filter> [-t][-c]');
    }
  }

  args() {
    this.module = Batangularjs.camelCase(this.args[0]);
    this.filterName = Batangularjs.camelCase(this.args[1]);

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
      this.dest += `filters/`;
    }
  }

  file() {
    let fileName = Batangularjs.kebabCase(this.filterName);
    this.file = `${fileName}.filter.js`;
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('filter.js'),
      this.destinationPath(`${this.dest}${this.file}`),
      {
        moduleName: this.moduleName,
        filterName: this.filterName
      }
    );
  }
};
