const { parseCommitHash } = require('./parseCommitHash');
const parseBranch = require('./parseBranch');
const parseAuthor = require('./parseAuthor');
const parseDate = require('./parseDate');

const SPLIT_COMMIT_REGEX = /^$\n(?=commit)/gm;

module.exports = output => {
  const commits = output.split(SPLIT_COMMIT_REGEX);

  return commits.map(commit => {
    const lines = commit.split('\n');
    return {
      hash: parseCommitHash(lines[0]),
      branch: parseBranch(lines[0]),
      author: parseAuthor(lines[1]),
      date: parseDate(lines[2]),
      message: lines.slice(3).join('\n').trim(),
    };
  });
};
