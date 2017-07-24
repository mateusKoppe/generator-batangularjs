let Generator = require('yeoman-generator');

module.exports = class extends Generator{

  constructor(args, opts) {
    super(args, opts);

    if(!this._isArgsValids(args)){
      this.log.error('Sintax error, you must use this sintax: batangularjs:route [module] [layout] <-t>');
      return;
    };

    this.moduleName = args[0];
    this.layoutName = args[1];

    if(this.moduleName == 'app') {
      this.moduleFolder = 'app/';
      this.moduleName = 'app';
    }else{
      this.moduleFolder = `app/${this.moduleName}/`;
      this.moduleName = `app.${this.moduleName}`;
    }

    this.preFolder = '';
    if(opts.t) this.preFolder += 'layouts/';

    this._writeProject();
  }

  method(){}

  _capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  _isArgsValids(args){
    return args.length;
  }

  _writeProject(){
    this.fs.copyTpl(
      this.templatePath('layout.html'),
      this.destinationPath(`${this.moduleFolder}${this.preFolder}${this.layoutName}.template.html`)
    );
    this.fs.copyTpl(
      this.templatePath('../../controller/templates/controller.js'),
      this.destinationPath(`${this.moduleFolder}${this.preFolder}${this.layoutName}.controller.js`),
      {
        moduleName: this.moduleName,
        controllerName: this._capitalize(this.layoutName),
      }
    );
  }

}
