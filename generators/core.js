module.exports = {
  upperCaseFirst,
  lowerCaseFirst,
  camelCase,
  kebabCase,
  folderByModule,
  nameByModule,
  fileDirByModule
};

function upperCaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseFirst(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function camelCase(string) {
  string = lowerCaseFirst(string);
  return string.replace(/[-_]./g, match => match.substr(1).toUpperCase());
}

function kebabCase(string) {
  string = lowerCaseFirst(string);
  return string
    .replace(/[A-Z]/g, match => '-' + match.toLowerCase())
    .replace(/_/g, '-');
}

function folderByModule(moduleName) {
  let folder = 'app/components/';
  folder += moduleName.replace(/\./g, '/');
  folder = kebabCase(folder);
  return folder;
}

function nameByModule(moduleName) {
  return camelCase(moduleName.split('.').pop());
}

function fileDirByModule(moduleName, type) {
  let name = nameByModule(moduleName);
  this.folder = folderByModule(moduleName);
  this.fileName = `${kebabCase(name)}.${type}.js`;
  return `${this.folder}/${this.fileName}`;
}
