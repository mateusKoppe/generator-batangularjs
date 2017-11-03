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
    if (this.args.length < 1) {
      this.env.error('Sintax error, you must use the sintax: Batangularjs:component <module> [-t]');
    }
    this.modulePath = this.args[0];
    this.componentName = Batangularjs.upperCaseFirst(
      Batangularjs.namePath(this.modulePath)
    );
    this.optTemplate = this.opts.t;
  }

  writing() {
    let data = {
      name: this.componentName,
      templateUrl: `./${Batangularjs.kebabCase(this.componentName)}.component.html`
    };
    let javascriptTemplate = 'component.js';
    if (this.optTemplate) {
      javascriptTemplate = 'component-separated.js';
      Batangularjs.generateFile(
        Batangularjs.fileDirPath(this.modulePath, 'component', true)
          .replace('.component.js', '.component.html'),
        javascriptTemplate,
        data,
        this
      );
    }
    Batangularjs.generateFile(
      Batangularjs.fileDirPath(this.modulePath, 'component', true),
      javascriptTemplate,
      data,
      this
    );
  }
};
