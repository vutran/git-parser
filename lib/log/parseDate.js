const DATE_INDEX_START = 'Date:   '.length;

module.exports = output => {
  const dateStr = output.slice(DATE_INDEX_START);
  return Date.parse(dateStr);
};
