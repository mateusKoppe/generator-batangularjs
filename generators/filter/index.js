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
      this.env.error('Sintax error, you must use the sintax: batangularjs:filter [filter] <-tc>');
    }
  }

  args(){
    this.moduleName = this.args[0];
    this.filterName = this.args[1];
  }

  folder(){
    this.dest = 'app/';
    if(this.moduleName !== 'app') {
      this.dest +=  `${this.moduleName}/`;
    }
    if(this.opts.c){
      this.dest +=  `core/`;
    }
    if(this.opts.t){
      this.dest +=  `filters/`;
    }
  }

  file(){
    this.file = `${this.filterName}.filter.js`;
  }

  writing(){
    this.fs.copyTpl(
      this.templatePath('filter.js'),
      this.destinationPath(`${this.dest}${this.file}`),
      {
        moduleName: this.moduleName,
        filterName: this.filterName
      }
    );
  }

}
