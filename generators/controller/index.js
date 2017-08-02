'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator{

  constructor(args, opts) {
    super(args, opts);

    this.args = args;
    this.opts = opts;

  }

  validateArgs(args){
    if(this.args.length < 2){
      this.env.error('Sintax error, you must use the sintax: batangularjs:controller [module] [controller]');
    }
  }

  args(){
    this.module = this.args[0];
    this.controllerName = this.args[1];

		this.moduleName = 'app';
		if(this.module !== 'app'){
			this.moduleName += `.${this.module}`;
		}
  }

  folder(){
		let moduleFolder = this.module.replace('.', '/');
    this.dest = 'app/';
    if(this.module !== 'app') {
      this.dest +=  `${moduleFolder}/`;
    }
  }

  file(){
    this.file = `${this.controllerName}.controller.js`;
  }

  writing(){
    this.fs.copyTpl(
      this.templatePath('controller.js'),
      this.destinationPath(`${this.dest}${this.file}`),
      {
        moduleName: this.moduleName,
        controllerName: this._capitalize(this.controllerName)
      }
    );
  }

  _capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
