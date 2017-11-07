import { readFileSync } from 'fs';
import test from 'ava';
import parseLog from '../../lib/log/parseLog';

const log = readFileSync('log.txt').toString();

test('parses the branch', t => {
  const parsed = parseLog(log);

  t.is(parsed[0].branch.length, 3);
  t.is(parsed[0].branch[1], 'origin/master')
});

test('returns empty array if commit has no branch information', t => {
  const parsed = parseLog(log);

  t.is(parsed[1].branch.length, 0);
});

test('parses the tag', t => {
  const parsed = parseLog(log);

  t.is(parsed[3].branch[0], 'tag: v0.2.0')
});
