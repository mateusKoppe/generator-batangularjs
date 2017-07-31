let Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    if (!this._isArgsValids(args)) {
      this.log.error('Sintax error, you must use this sintax: batangularjs:route [module]');
      return;
    }

    this.routeName = args[0];

    if (this.routeName == 'app') {
      this.moduleFolder = 'app/';
      this.moduleName = 'app';
    } else {
      this.moduleFolder = `app/${this.routeName}/`;
      this.moduleName = `app.${this.routeName}`;
    }

    this._writeProject();
  }

  method() {}

  _isArgsValids(args) {
    return args.length;
  }

  _writeProject() {
    this.fs.copyTpl(
      this.templatePath('route.js'),
      this.destinationPath(`${this.moduleFolder}${this.routeName}.routes.js`),
      {moduleName: this.moduleName}
    );
  }
};
