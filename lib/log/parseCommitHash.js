const SHA1_LENGTH = 40;
const HASH_INDEX_START = 'commit '.length; // Total characters before hash

const parseCommitHash = output => {
  return output.slice(HASH_INDEX_START, HASH_INDEX_START+SHA1_LENGTH);
};

module.exports = {
  SHA1_LENGTH,
  HASH_INDEX_START,
  parseCommitHash,
}
