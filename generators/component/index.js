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
      this.env.error('Sintax error, you must use the sintax: batangularjs:component <module> <component> [-t][-c][-i]');
    }
  }

  args() {
    this.module = Batangularjs.camelCase(this.args[0]);
    this.componentName = Batangularjs.camelCase(this.args[1]);

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
      this.dest += `components/`;
    }
  }

  writing() {
    if (this.opts.i) {
      this._copyFileByTemplate('component-separated.js');
      this._copyFileByTemplate('component-separated.html');
    } else {
      this._copyFileByTemplate('component.js');
    }
  }

  _copyFileByTemplate(templateName) {
    let extension = templateName.split('.').reverse()[0];
    let type = 'component';
    if (extension === 'html') {
      type = 'template';
    }

    let folderInApp = this.dest.split('/');
    folderInApp.shift();
    folderInApp = folderInApp.join('/');
    let fileName = Batangularjs.kebabCase(this.componentName);
    this.fs.copyTpl(
      this.templatePath(templateName),
      this.destinationPath(`${this.dest}${fileName}.${type}.${extension}`),
      {
        moduleName: this.moduleName,
        componentName: this.componentName,
        capitalizeComponentName: Batangularjs.upperCaseFirst(this.componentName),
        folder: folderInApp
      }
    );
  }
};
