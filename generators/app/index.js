let Generator = require('yeoman-generator');

module.exports = class extends Generator{

  constructor(args, opts) {
    super(args, opts);
  }

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project folder',
        default: '.'
      }
    ]).then((aswners) => {
      this.app = aswners.name;
      this._writeProject();
    })
  }

  _writeProject(){
    this.fs.copy(this.templatePath('!(_.*)'), this.destinationPath(`${this.app}/.`));
    this.fs.copy(this.templatePath('app/'), this.destinationPath(`${this.app}/app/`));
    this.fs.copy(this.templatePath('_.bowerrc'), this.destinationPath(`${this.app}/.bowerrc`));
    this.fs.copy(this.templatePath('_.gitignore'), this.destinationPath(`${this.app}/.gitignore`));
  }

}
