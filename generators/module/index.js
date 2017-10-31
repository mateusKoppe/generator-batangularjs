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
      this.env.error('Sintax error, you must use the sintax: batangularjs:module <module> [-r]');
    }
  }

  logic() {
    const modulePath = this.args[0];
    this.moduleName = Batangularjs.nameByModule(modulePath);
    this.folder = Batangularjs.folderByModule(modulePath);
    this.fileName = `${Batangularjs.kebabCase(this.moduleName)}.module.js`;
    this.fileDir = `${this.folder}/${this.fileName}`;
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('module.js'),
      this.destinationPath(`${this.fileDir}`),
      {
        moduleName: this.moduleName,
        capitalizeModuleName: Batangularjs.upperCaseFirst(this.moduleName),
        route: this.opts.r
      }
    );
  }
};
