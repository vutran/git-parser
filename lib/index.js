const parseDiff = require('./diff/parseDiff');
const parseFileHeader = require('./diff/parseFileHeader');
const parseHunkHeader = require('./diff/parseHunkHeader');

const parseStatus = require('./status/parseStatus');

module.exports = {
  parseDiff,
  parseFileHeader,
  parseHunkHeader,
  parseStatus
};
