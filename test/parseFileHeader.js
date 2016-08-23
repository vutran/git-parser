import test from 'ava';
import parseFileHeader from '../lib/parseFileHeader';

test('parses the file header', t => {
  const diff = `
--- a/index.js
+++ b/index.js
 `;
  const parsed = parseFileHeader(diff);
  t.is(parsed.length, 2);
  t.deepEqual(parsed[0], {
    lineIndex: 1,
    value: '--- a/index.js',
    type: 'from',
    file: 'index.js',
  });
  t.deepEqual(parsed[1], {
    lineIndex: 2,
    value: '+++ b/index.js',
    type: 'to',
    file: 'index.js',
  });
});
