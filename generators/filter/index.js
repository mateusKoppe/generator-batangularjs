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
      this.env.error('Sintax error, you must use the sintax: batangularjs:filter <module>');
      return;
    }
    this.modulePath = this.args[0];
    this.filterName = Batangularjs.upperCaseFirst(
      Batangularjs.namePath(this.modulePath)
    );
  }

  writing() {
    Batangularjs.generateFile(
      `${Batangularjs.fileDirPath(this.modulePath, 'filter')}`,
      'filter.js',
      {
        name: this.filterName
      },
      this
    );
  }
};
