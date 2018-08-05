const parseHunkHeader = require('./parseHunkHeader');
const { isFileHeader, isHunkHeader, getFileHeader, getHunkHeader } = require('./utils');

/**
 * Parses a git diff output and returns an array tree
 *
 * @param {String} output - The git diff output
 * @return {Object[]}
 */
module.exports = output => {
  const parsed = [];
  const hunks = parseHunkHeader(output);
  let lineNumber = 0;
  const lines = output.split('\n').map(line => {
    let type = 'unmodified';
    let data = null;
    // if it's a hunk or file header line
    // reset the line number and set it's type
    if (isHunkHeader(line)) {
      lineNumber = 0;
      type = 'hunk';
      data = getHunkHeader(line);
    } else if (isFileHeader(line)) {
      lineNumber = 0;
      type = 'file';
      data = getFileHeader(line);
    } else if (/^\s*(\-{1})/.test(line)) {
      // if line was deleted
      type = 'deleted';
    } else if (/^\s*(\+{1})/.test(line)) {
      // if line was inserted
      type = 'inserted';
    }
    // add to parsed array
    parsed.push({
      number: lineNumber,
      type,
      data,
      value: line.trimLeft(),
    });
    lineNumber++;
  });
  return parsed;
};
