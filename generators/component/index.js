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
      this.env.error('Sintax error, you must use the sintax: Batangularjs:component <module> [--template|-t][--style|-s]');
    }
    this.modulePath = this.args[0];
    this.componentName = Batangularjs.upperCaseFirst(
      Batangularjs.namePath(this.modulePath)
    );
    this.optTemplate = this.opts.t || this.opts.template;
    this.optStyle = this.opts.s || this.opts.style;
  }

  writing() {
    let data = {
      name: this.componentName,
      file: `./${Batangularjs.kebabCase(this.componentName)}`,
      style: this.optStyle
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
    if (this.optStyle) {
      this.fs.write(`${Batangularjs.fileDirPath(this.modulePath, 'component', true)
        .replace('.component.js', '.component.scss')}`, '');
    }
    Batangularjs.generateFile(
      Batangularjs.fileDirPath(this.modulePath, 'component', true),
      javascriptTemplate,
      data,
      this
    );
  }
};
