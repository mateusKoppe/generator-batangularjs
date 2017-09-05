module.exports = {
  upperCaseFirst,
  lowerCaseFirst,
  camelCase,
  kebabCase
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
