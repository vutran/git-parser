const { ON_BRANCH_REGEX } = require('./regex');

module.exports = output => {
  const matches = output.match(ON_BRANCH_REGEX);
  return matches ? matches[1].trim() : 'default';
}
