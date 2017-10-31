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
      this.env.error('Sintax error, you must use the sintax: Batangularjs:component <module> [-i]');
    }
    this.modulePath = this.args[0];
    this.componentName = Batangularjs.upperCaseFirst(
      Batangularjs.nameByModule(this.modulePath)
    );
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
    let destiny = Batangularjs.fileDirByModule(this.modulePath, 'component');
    if (extension === 'html') {
      templateName = templateName.replace('.component.js', '.html');
      destiny = destiny.replace('.component.js', '.html');
      console.log(templateName);
    }

    this.fs.copyTpl(
      this.templatePath(templateName),
      this.destinationPath(destiny),
      {
        componentName: Batangularjs.upperCaseFirst(this.componentName),
        templateUrl: `./${Batangularjs.kebabCase(this.componentName)}.html`
      }
    );
  }
};
