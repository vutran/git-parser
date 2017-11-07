const { SHA1_LENGTH, HASH_INDEX_START } = require('./parseCommitHash');

const BRANCH_INDEX_START = SHA1_LENGTH + HASH_INDEX_START + (' ('.length);

const haveBranch = output => {
  return output.length > BRANCH_INDEX_START;
};

module.exports = output => {
  if (!haveBranch(output)) {
    return [];
  }
  const branchText = output.slice(BRANCH_INDEX_START,-1);
  const branches = branchText.split(',');

  return branches.map(branch => {
    if (branch.startsWith('HEAD -> ')) {
      return branch.slice(8).trim();
    }
    return branch.trim();
  });
};
