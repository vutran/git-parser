const { HUNK_REGEX } = require('./regex');

/**
 * Checks if the line is a hunk header
 *
 * @param {String} line
 * @return {Boolean}
 */
const isHunk = line => HUNK_REGEX.test(line);

/**
 * Retrieves the hunk object for the given line
 *
 * @param {String} line
 * @return {Object}
 */
const getHunk = line => {
  const matches = line.match(HUNK_REGEX);
  if (matches.length) {
    return {
      value: line,
      from: {
        start: matches[1],
        count: matches[2],
      },
      to: {
        start: matches[3],
        count: matches[4],
      },
    };
  }
  return {};
};

module.exports = {
  isHunk,
  getHunk,
};
