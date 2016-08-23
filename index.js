const parseDiff = require('./lib/parseDiff');
const parseFileHeader = require('./lib/parseFileHeader');
const parseHunkHeader = require('./lib/parseHunkHeader');

module.exports = {
  parseDiff,
  parseFileHeader,
  parseHunkHeader,
};
