'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-batangularjs') + '!'
    ));

    const prompts = [
      {
        type: 'confirm',
        name: 'autoInstall',
        message: 'Can i install the dependencies?'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(this.templatePath('!(_.*)'), this.destinationPath(`.`));
    this.fs.copy(this.templatePath('app/'), this.destinationPath(`./app/`));
    this._installHideFiles(['editorconfig', 'gitignore', 'eslintrc.js', 'yo-rc.json']);
  }

  install() {
    if (this.props.autoInstall) {
      this.installDependencies();
    }
  }

  _installHideFiles(files) {
    files.forEach(file => this.fs.copy(this.templatePath(`_.${file}`), this.destinationPath(`./.${file}`)));
  }
};
