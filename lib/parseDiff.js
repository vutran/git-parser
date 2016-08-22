const parseHunks = require('./parseHunk');
const { isHunk } = require('./utils');

/**
 * Parses a git diff output and returns an array tree
 *
 * @param {String} output - The git diff output
 * @return {Object[]}
 */
module.exports = output => {
  const parsed = [];
  const hunks = parseHunks(output);
  let lineNumber = 0;
  const lines = output.split('\n').map(line => {
    let type = 'unmodified';
    // if it's a hunk header line
    // reset the line number and set it's type
    if (isHunk(line)) {
      lineNumber = 0;
      type = 'hunk';
    }
    if (/^(\-{1})/.test(line)) {
      // if line was deleted
      type = 'deleted';
    } else if (/^(\+{1})/.test(line)) {
      // if line was inserted
      type = 'inserted';
    }
    // add to parsed array
    parsed.push({
      number: lineNumber,
      type,
      value: line,
    });
    lineNumber++;
  });
  return parsed;
};
