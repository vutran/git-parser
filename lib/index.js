const parseDiff = require('./diff/parseDiff');
const parseFileHeader = require('./diff/parseFileHeader');
const parseHunkHeader = require('./diff/parseHunkHeader');

module.exports = {
  parseDiff,
  parseFileHeader,
  parseHunkHeader,
};
