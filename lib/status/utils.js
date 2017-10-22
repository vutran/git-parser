const { STAGED_FILE_REGEX } = require('./regex');

/**
 * Create status object base on the status line
 *
 * @param {String} file - file name
 * @param {String} status - porcelain status code
 * @param {Boolean} isStaged - true if staged otherwise false
 * @return {Object}
 */
const createStatus = (file, status, isStaged) => {
  return {
    staged: isStaged,
    fileName: file,
    status: status.toUpperCase()
  };
}

const filterLinesBy = (regex, lines) => {
  return lines.filter(line => regex.test(line));
}

const isStagedRegex = regex => regex.toString() === STAGED_FILE_REGEX.toString(); 

module.exports = {
  createStatus,
  filterLinesBy,
  isStagedRegex
};
