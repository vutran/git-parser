const parseDiff = require('./lib/diff/parseDiff');
const parseFileHeader = require('./lib/diff/parseFileHeader');
const parseHunkHeader = require('./lib/diff/parseHunkHeader');

module.exports = {
  parseDiff,
  parseFileHeader,
  parseHunkHeader,
};
