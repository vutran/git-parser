const { isFileHeader, getFileHeader } = require('./utils');

/**
 * Parses a git diff output and returns an array tree
 *
 * @param {String} output - The git diff output
 * @return {Object}
 */
module.exports = output => {
  const headers = [];
  const lines = output.split('\n').map((line, lineIndex) => {
    if (isFileHeader(line)) {
      const headers = getFileHeader(line);
      headers.lineIndex = lineIndex;
      headers.push(hunk);
    }
  });
  return headers;
};
