module.exports = {
  upperCaseFirst,
  lowerCaseFirst,
  camelCase,
  kebabCase,
  folderPath,
  namePath,
  fileDirPath
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

function folderPath(path) {
  let folders = path.split('/');
  folders.pop();
  folders = folders.join('/');
  return `app/${kebabCase(folders)}`;
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
  let fileName = `${kebabCase(name)}.${type}.js`;
  return `${folder}/${fileName}`;
}
