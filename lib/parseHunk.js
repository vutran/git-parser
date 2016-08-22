const { isHunk, getHunk } = require('./utils');

/**
 * Parses a git diff output and returns an array tree
 *
 * @param {String} output - The git diff output
 * @return {Object}
 */
module.exports = output => {
  const hunks = [];
  const lines = output.split('\n').map((line, lineIndex) => {
    if (isHunk(line)) {
      const hunk = getHunk(line);
      hunk.lineIndex = lineIndex;
      hunks.push(hunk);
    }
  });
  return hunks;
};
