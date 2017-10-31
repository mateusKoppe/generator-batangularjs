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
    if (this.args.length != 1) {
      this.env.error('Sintax error, you must use the sintax: Batangularjs:directive <module> [-i]');
    }
  }

  logic() {
    const modulePath = this.args[0];
    this.directiveName = Batangularjs.nameByModule(modulePath);
    this.folder = Batangularjs.folderByModule(modulePath);
    this.fileName = `${Batangularjs.kebabCase(this.directiveName)}.directive.js`;
    this.fileDir = `${this.folder}/${this.fileName}`;
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
    let destiny = this.fileDir;
    if (extension === 'html') {
      templateName = templateName.replace('.directive.js', '.html');
      destiny = destiny.replace('.directive.js', '.html');
      console.log(templateName);
    }

    this.fs.copyTpl(
      this.templatePath(templateName),
      this.destinationPath(destiny),
      {
        directiveName: Batangularjs.upperCaseFirst(this.directiveName),
        templateUrl: `./${Batangularjs.kebabCase(this.directiveName)}.html`
      }
    );
  }
};
