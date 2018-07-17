function upperCaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseFirst(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function camelCase(string) {
  const lowerString = lowerCaseFirst(string);
  return lowerString.replace(/[-_]./g, match => match.substr(1).toUpperCase());
}

function kebabCase(string) {
  const lowerString = lowerCaseFirst(string);
  return lowerString
    .replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
    .replace(/_/g, '-');
}

function folderPath(path) {
  let folders = path.split('/');
  if (folders.length < 2) {
    return 'src/app';
  }
  folders.pop();
  folders = folders.join('/');
  return `src/app/${kebabCase(folders)}`;
}

function namePath(path) {
  return camelCase(path.split('/').pop());
}

function fileDirPath(path, type, insideFolder) {
  const name = namePath(path);
  let folder = folderPath(path);
  if (insideFolder) {
    folder += `/${kebabCase(name)}`;
  }
  const fileName = `${kebabCase(name)}.${type}.js`;
  return `${folder}/${fileName}`;
}

function generateFile(file, template, data, contex) {
  contex.fs.copyTpl(
    contex.templatePath(template),
    contex.destinationPath(file),
    data,
  );
}

module.exports = {
  upperCaseFirst,
  lowerCaseFirst,
  camelCase,
  kebabCase,
  folderPath,
  namePath,
  fileDirPath,
  generateFile,
};
