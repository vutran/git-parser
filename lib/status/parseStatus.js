const parseBranch = require('./parseBranch');
const { STAGED_FILE_REGEX, UNSTAGED_FILE_REGEX, UNTRACKED_FILE_REGEX } = require('./regex');
const parseLineStatus = require('./parseLineStatus');

/**
 * Parses a git status output and returns status on all tracked and untracked
 *
 * @param {String} output - The git status output
 * @return {Object}
 */
module.exports = output => {
  let parsed = {};
  parsed.branch = parseBranch(output);
  
  const lines = output.split('\n');
  
  const staged = parseLineStatus(STAGED_FILE_REGEX, lines);
  const unstaged = parseLineStatus(UNSTAGED_FILE_REGEX, lines);
  const untracked = parseLineStatus(UNTRACKED_FILE_REGEX, lines);
  parsed.statuses = [...staged, ...unstaged, ...untracked];
  
  return parsed;
}
