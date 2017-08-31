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
      this.env.error('Sintax error, you must use the sintax: batangularjs:module <module>');
    }
  }

  args() {
    this.module = Batangularjs.camelCase(this.args[0]);

    this.moduleName = 'app';
    if (this.module !== 'app') {
      this.moduleName += `.${this.module}`;
    }
  }

  folder() {
    let moduleFolder = Batangularjs.kebabCase(this.module.replace('.', '/'));
    this.dest = 'app/';
    if (this.module !== 'app') {
      this.dest += `${moduleFolder}/`;
    }
  }

  file() {
    let actualModule = this.module.split('.').reverse()[0];
    let fileName = Batangularjs.camelCase(actualModule);
    this.file = `${fileName}.module.js`;
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('module.js'),
      this.destinationPath(`${this.dest}${this.file}`),
      {moduleName: this.moduleName}
    );
  }
};
