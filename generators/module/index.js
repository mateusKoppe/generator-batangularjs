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
      this.env.error('Sintax error, you must use the sintax: batangularjs:module <module> [--route|-r][--component|-c][--template|-t]');
      return;
    }
    this.modulePath = this.args[0];
    this.moduleName = Batangularjs.upperCaseFirst(
      Batangularjs.namePath(this.modulePath)
    );
    this.optRoute = this.opts.r || this.opts.route;
    this.optComponent = this.opts.c || this.opts.component;
    this.optTemplate = this.opts.t || this.opts.template;
  }

  writing() {
    let data = {
      name: this.moduleName,
      capitalizeName: Batangularjs.upperCaseFirst(this.moduleName),
      templateUrl: `./${Batangularjs.kebabCase(this.moduleName)}.component.html`,
      route: this.optRoute
    };

    Batangularjs.generateFile(
      Batangularjs.fileDirPath(this.modulePath, 'module', true),
      'module.js',
      data,
      this
    );

    this._writeComponent(data);
  }

  _writeComponent(data) {
    let nameTemplate = 'component.js';
    const dirTemplate = '../../component/templates';
    if (this.optTemplate) {
      nameTemplate = 'component-separated.js';
      Batangularjs.generateFile(
        Batangularjs.fileDirPath(this.modulePath, 'component', true)
          .replace('.component.js', '.component.html'),
        `${dirTemplate}/component-separated.html`,
        data,
        this
      );
    }

    if (this.optComponent) {
      Batangularjs.generateFile(
        Batangularjs.fileDirPath(this.modulePath, 'component', true),
        `${dirTemplate}/${nameTemplate}`,
        data,
        this
      );
    }
  }
};
