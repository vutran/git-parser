const parseDiff = require('./lib/diff/parseDiff');
const parseFileHeader = require('./lib/diff/parseFileHeader');
const parseHunkHeader = require('./lib/diff/parseHunkHeader');

const parseStatus = require('./lib/status/parseStatus');

module.exports = {
  parseDiff,
  parseFileHeader,
  parseHunkHeader,
  parseStatus
};
