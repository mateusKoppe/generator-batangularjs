module.exports = {
  capitalize: capitalize
};

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
