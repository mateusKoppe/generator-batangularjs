let Generator = require('yeoman-generator');

module.exports = class extends Generator{

  constructor(args, opts) {
    super(args, opts);

    if(!this._isArgsValids(args)){
      this.log.error('Sintax error, you must use this sintax: batangularjs:factory [module] [factory] <-t>');
      return;
    };

    this.moduleName = args[0];
    this.factoryName = args[1];

    if(opts.t) this.preFolder = 'factories/';

    this._writeProject();
  }

  method(){}

  _isArgsValids(args){
    return args.length >= 2;
  }

  _writeProject(){
    this.fs.copyTpl(
      this.templatePath('factory.js'),
      this.destinationPath(`app/${this.moduleName}/${this.preFolder}${this.factoryName}.factory.js`),
      {
        moduleName: this.moduleName,
        factoryName: this.factoryName
      }
    );
  }

}
