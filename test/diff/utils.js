import test from 'ava';
import utils from '../../lib/diff/utils';

test('is a file header', t => {
  t.true(utils.isFileHeader('--- a/file'));
  t.true(utils.isFileHeader('+++ b/file'));
});

test('is a hunk header', t => {
  t.true(utils.isHunkHeader('@@ -1,20 +1,20 @@'));
});

test('get the from file header', t => {
  const line = '--- a/file';
  const file = utils.getFileHeader(line);
  const expected = {
    value: line,
    type: 'from',
    file: 'file',
  };
  t.deepEqual(file, expected);
});

test('get the to file header', t => {
  const line = '+++ a/file';
  const file = utils.getFileHeader(line);
  const expected = {
    value: line,
    type: 'to',
    file: 'file',
  };
  t.deepEqual(file, expected);
});

test('get the hunk header', t => {
  const line = '@@ -1,20 +5,25 @@';
  const hunk = utils.getHunkHeader(line);
  const expected = {
    value: line,
    from: {
      start: 1,
      count: 20,
    },
    to: {
      start: 5,
      count: 25,
    },
  };
  t.deepEqual(hunk, expected)
});
