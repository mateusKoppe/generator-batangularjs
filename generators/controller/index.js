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
    if(!this.args.length > 2){
      this.env.error('Sintax error, you must use the sintax: batangularjs:controller [module] [controller]');
    }
  }

  args(){
    this.moduleName = this.args[0];
    this.controllerName = this.args[1];
  }

  folder(){
    this.dest = 'app/';
    if(this.moduleName !== 'app') {
      this.dest +=  `${this.moduleName}/`;
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
