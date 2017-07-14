let Generator = require('yeoman-generator');

module.exports = class extends Generator{

  constructor(args, opts) {
    super(args, opts);

    if(!this._isArgsValids(args)){
      this.log.error('Sintax error, you must use this sintax: batangularjs:component [module] [component] <-ti>');
      return;
    };

    this.moduleName = args[0];
    this.componentName = args[1];

    this.preFolder = opts.t?'components':'';
    this.isolated = opts.i;

    this.folder = `app/${this.moduleName}/${this.preFolder}`;

    this._writeProject();
  }

  method(){}

  _capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  _isArgsValids(args){
    return args.length >= 2;
  }

  _writeProject(){
    if(this.isolated){
      this._multipleFile();
    }else{
      this._uniqueFile();
    }
  }

  _multipleFile(){
    this._copyComponentByTemplate('component-separated.js');
    this._copyComponentByTemplate('component-separated.html', 'template');
  }

  _uniqueFile(){
    this._copyComponentByTemplate('component.js');
  }

  _copyComponentByTemplate(templateName, type = 'component'){
    let extension = templateName.split('.').reverse()[0];
    this.fs.copyTpl(
      this.templatePath(templateName),
      this.destinationPath(`${this.folder}/${this.componentName}.${type}.${extension}`),
      {
        moduleName: this.moduleName,
        componentName: this.componentName,
        capitalizeComponentName: this._capitalize(this.componentName),
        folder: this.folder
      }
    );
  }

}
