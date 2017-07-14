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
    this.fs.copy(this.templatePath('.'), this.destinationPath(`${this.app}/.`));
  }

}
