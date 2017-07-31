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
        type: 'input',
        name: 'dir',
        message: 'What is your project folder?',
        default: '.'
      }, {
        type: 'checkbox',
        name: 'gulpOptions',
        message: 'Which gulp options you like to include?',
        choices: [
          {
            value: 'server',
            name: 'Server',
            checked: true
          }, {
            value: 'dev',
            name: 'Dev',
            checked: true
          }, {
            value: 'build',
            name: 'Build',
            checked: true
          }
        ]
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
      console.log(this.props);
    });
  }

  writing() {
    this.fs.copy(this.templatePath('!(_*)'), this.destinationPath(`${this.props.dir}/.`));
    this.fs.copy(this.templatePath('app/'), this.destinationPath(`${this.props.dir}/app/`));
    this._installHideFiles(['bowerrc', 'editorconfig', 'gitignore', 'jscsrc', 'yo-rc.json']);
  }

  install() {
    this.installDependencies();
  }

  _installHideFiles(files) {
    files.forEach(file => this.fs.copy(this.templatePath(`_.${file}`), this.destinationPath(`${this.props.dir}/.${file}`)));
  }
};
