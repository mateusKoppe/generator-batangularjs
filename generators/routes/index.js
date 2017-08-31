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
      this.env.error('Sintax error, you must use the sintax: batangularjs:routes <module>');
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
    this.dest = 'app/';
    if (this.module !== 'app') {
      let moduleFolder = Batangularjs.camelCase(this.module);
      this.dest += `${moduleFolder}/`;
    }
  }

  file() {
    let fileName = Batangularjs.kebabCase(this.module);
    this.file = `${fileName}.routes.js`;
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('routes.js'),
      this.destinationPath(`${this.dest}${this.file}`),
      {moduleName: this.moduleName}
    );
  }
};
