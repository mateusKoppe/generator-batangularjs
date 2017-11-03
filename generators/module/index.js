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
      this.env.error('Sintax error, you must use the sintax: batangularjs:module <module> [-r][-c]');
      return;
    }
    this.modulePath = this.args[0];
    this.moduleName = Batangularjs.upperCaseFirst(
      Batangularjs.namePath(this.modulePath)
    );
    this.optRoute = this.opts.r;
  }

  writing() {
    let data = {
      name: this.moduleName,
      capitalizeName: Batangularjs.upperCaseFirst(this.moduleName),
      route: this.optRoute
    };

    Batangularjs.generateFile(
      Batangularjs.fileDirPath(this.modulePath, 'module', true),
      'module.js',
      data,
      this
    );
  }
};
