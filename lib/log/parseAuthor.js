const AUTHOR_NAME_INDEX_START = 'Author: '.length;

module.exports = output => {
  const AUTHOR_NAME_INDEX_END = output.indexOf('<');
  return {
    name: output.slice(AUTHOR_NAME_INDEX_START, AUTHOR_NAME_INDEX_END-1),
    email: output.slice(AUTHOR_NAME_INDEX_END+1, -1),
  };
};
