module.exports = {
  upperCaseFirst: string => string.charAt(0).toUpperCase() + string.slice(1),
  lowerCaseFirst: string => string.charAt(1).toLowerCase() + string.slice(1),
  calmelCase: string => {
    string = this.lowerCaseFirst(string);
    return string.replace(/[-_]./g, match => match.substr(1).toUpperCase);
  },
  kebabCase: string => {
    string = this.lowerCaseFirst(string);
    return string
      .replace(/[A-Z]/g, match => '-' + match.toLowerCase)
      .replace('_', '-');
  }
};
