const FILE_HEADER_REGEX = /^((?:\-|\+){3}) (?:a|b)\/(.+)$/;
const HUNK_HEADER_REGEX = /^\@{2} \-([0-9]+),([0-9]+) \+([0-9]+),([0-9]+) \@{2}$/;

module.exports = {
  FILE_HEADER_REGEX,
  HUNK_HEADER_REGEX,
};
