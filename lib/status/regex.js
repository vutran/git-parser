const ON_BRANCH_REGEX = /^## (.+)/;
const STAGED_FILE_REGEX = /^(\w)\s\s+(.+)$/;
const UNSTAGED_FILE_REGEX = /^\s(\w)\s+(.+)$/;
const UNTRACKED_FILE_REGEX = /^(\?\?)\s+(.+)$/;
module.exports = {
  ON_BRANCH_REGEX,
  STAGED_FILE_REGEX,
  UNSTAGED_FILE_REGEX,
  UNTRACKED_FILE_REGEX
};
