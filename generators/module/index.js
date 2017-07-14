let Generator = require('yeoman-generator');

module.exports = class extends Generator{

  constructor(args, opts) {
    super(args, opts);

    if(!this._isArgsValids(args)){
      this.log.error('Sintax error, you must use this sintax: batangularjs:module [module]');
      return;
    };

    this.moduleName = args[0];

    this._writeProject();
  }

  method(){}

  _isArgsValids(args){
    return args.length;
  }

  _writeProject(){
    this.fs.copyTpl(
      this.templatePath('module.js'),
      this.destinationPath(`app/${this.moduleName}/${this.moduleName}.module.js`),
      {moduleName: this.moduleName}
    );
  }

}
