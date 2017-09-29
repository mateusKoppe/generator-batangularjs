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
      this.env.error('Sintax error, you must use the sintax: batangularjs:directive <module> <directive> [-t][-c][-i]');
    }
  }

  args() {
    this.module = Batangularjs.camelCase(this.args[0]);
    this.directiveName = Batangularjs.camelCase(this.args[1]);

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
      this.dest += `directives/`;
    }
  }

  writing() {
    if (this.opts.i) {
      this._copyFileByTemplate('directive-separated.js');
      this._copyFileByTemplate('directive-separated.html');
    } else {
      this._copyFileByTemplate('directive.js');
    }
  }

  _copyFileByTemplate(templateName) {
    let extension = templateName.split('.').reverse()[0];
    let type = 'directive';
    if (extension === 'html') {
      type = 'template';
    }

    let folderInApp = this.dest.split('/');
    folderInApp.shift();
    folderInApp = folderInApp.join('/');
    let fileName = Batangularjs.kebabCase(this.directiveName);
    this.fs.copyTpl(
      this.templatePath(templateName),
      this.destinationPath(`${this.dest}${fileName}.${type}.${extension}`),
      {
        moduleName: this.moduleName,
        directiveName: this.directiveName,
        fileName,
        capitalizeDirectiveName: Batangularjs.upperCaseFirst(this.directiveName),
        folder: folderInApp
      }
    );
  }
};
