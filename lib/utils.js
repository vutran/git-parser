const { FILE_HEADER_REGEX, HUNK_HEADER_REGEX } = require('./regex');

/**
 * Checks if the line is a file header
 *
 * @param {String} line
 * @return {Boolean}
 */
const isFileHeader = line => FILE_HEADER_REGEX.test(line);

/**
 * Checks if the line is a hunk header
 *
 * @param {String} line
 * @return {Boolean}
 */
const isHunkHeader = line => HUNK_HEADER_REGEX.test(line);

/**
 * Retrieves the hunk object for the given line
 *
 * @param {String} line
 * @return {Object}
 */
const getHunkHeader = line => {
  const matches = line.match(HUNK_HEADER_REGEX);
  if (matches.length) {
    return {
      value: line,
      from: {
        start: parseInt(matches[1], 10),
        count: parseInt(matches[2], 10),
      },
      to: {
        start: parseInt(matches[3], 10),
        count: parseInt(matches[4], 10),
      },
    };
  }
  return {};
};

/**
 * Retrieves the file header object for the given line
 *
 * @param {String} line
 * @return {Object}
 */
const getFileHeader = line => {
  const matches = line.match(FILE_HEADER_REGEX);
  if (matches.length) {
    const type = matches[1] === '---' ? 'from' : 'to';
    return {
      value: line,
      type,
      file: matches[2],
    };
  }
  return {};
};

module.exports = {
  isFileHeader,
  isHunkHeader,
  getFileHeader,
  getHunkHeader,
};
