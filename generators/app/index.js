

const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(
      'Welcome to the generator-batangularjs!',
    ));

    const prompts = [
      {
        type: 'confirm',
        name: 'autoInstall',
        message: 'Can i install the dependencies?',
      },
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(this.templatePath('src/'), this.destinationPath('./src/'));
    this._installFiles(['package.json', 'package-lock.json', 'webpack.config.js']);
    this._installHideFiles(['editorconfig', 'gitignore', 'eslintrc.js', 'yo-rc.json']);
  }

  install() {
    if (this.props.autoInstall) {
      this.npmInstall();
    }
  }

  _installFiles(files) {
    files.forEach(file => this.fs.copy(this.templatePath(file), this.destinationPath(file)));
  }

  _installHideFiles(files) {
    files.forEach(file => this.fs.copy(this.templatePath(`_.${file}`), this.destinationPath(`./.${file}`)));
  }
};
