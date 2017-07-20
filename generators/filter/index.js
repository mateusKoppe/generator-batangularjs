let Generator = require('yeoman-generator');

module.exports = class extends Generator{

  constructor(args, opts) {
    super(args, opts);

    if(!this._isArgsValids(args)){
      this.log.error('Sintax error, you must use this sintax: batangularjs:filter [module] [filter] <-tc>');
      return;
    };

    this.moduleName = args[0];
    this.filterName = args[1];

    if(this.moduleName == 'app') {
      this.moduleFolder = 'app/';
      this.moduleName = 'app';
    }else{
      this.moduleFolder = `app/${this.moduleName}/`;
      this.moduleName = `app.${this.moduleName}`;
    }

    this.preFolder = '';
    if(opts.c) this.preFolder += 'core/';
    if(opts.t) this.preFolder += 'filters/';

    this._writeProject();
  }

  method(){}

  _isArgsValids(args){
    return args.length >= 2;
  }

  _writeProject(){
    this.fs.copyTpl(
      this.templatePath('filter.js'),
      this.destinationPath(`${this.moduleFolder}${this.preFolder}${this.filterName}.filter.js`),
      {
        moduleName: this.moduleName,
        filterName: this.filterName
      }
    );
  }

}
