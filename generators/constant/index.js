

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
      this.env.error('Sintax error, you must use the sintax: batangularjs:constant <module>');
      return;
    }
    [this.modulePath, this.constantValue] = this.args;
    this.constanteName = Batangularjs.upperCaseFirst(
      Batangularjs.namePath(this.modulePath),
    );
  }

  writing() {
    Batangularjs.generateFile(
      `${Batangularjs.fileDirPath(this.modulePath, 'constant')}`,
      'constant.js',
      {
        name: this.constanteName,
        value: this.constantValue,
      },
      this,
    );
  }
};
