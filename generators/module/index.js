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
    this.module = this.args[0];

		this.moduleName = 'app';
		if(this.module !== 'app'){
			this.moduleName += `.${this.module}`;
		}
  }

  folder(){
    this.dest = 'app/';
    if(this.module !== 'app') {
      this.dest +=  `${this.module}/`;
    }
  }

  file(){
    this.file = `${this.module}.module.js`;
  }

  writing(){
    this.fs.copyTpl(
      this.templatePath('module.js'),
      this.destinationPath(`${this.dest}${this.file}`),
      {moduleName: this.moduleName}
    );
  }

}
