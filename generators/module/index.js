let Generator = require('yeoman-generator');

module.exports = class extends Generator{

  constructor(args, opts) {
    super(args, opts);

    this.args = args;
    this.opts = opts;

  }

  validateArgs(args){
    if(!this.args.length){
      this.env.error('Sintax error, you must use the sintax: batangularjs:module [module]');
    }
  }

  args(){
    this.moduleName = this.args[0];
  }

  folder(){
    this.dest = 'app/';
    if(this.moduleName !== 'app') {
      this.dest +=  `${this.moduleName}/`;
    }
  }

  file(){
    this.file = `${this.moduleName}.module.js`;
  }

  writing(){
    this.fs.copyTpl(
      this.templatePath('module.js'),
      this.destinationPath(`${this.dest}${this.file}`),
      {moduleName: this.moduleName}
    );
  }

}
