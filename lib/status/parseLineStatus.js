const { createStatus, filterLinesBy, isStagedRegex } = require('./utils');

module.exports = (regex, lines) => {
  const workingStatuses = filterLinesBy(regex, lines);
  const isStaged = isStagedRegex(regex);
  
  return workingStatuses.map(line => {
    const matches = line.match(regex);
    return createStatus(matches[2], matches[1], isStaged);
  });
}
