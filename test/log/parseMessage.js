import { readFileSync } from 'fs';
import test from 'ava';
import parseLog from '../../lib/log/parseLog';

test('parses the commit message', t => {
  const log = readFileSync('log.txt').toString();
  const parsed = parseLog(log);

  t.is(parsed[0].message, ':sparkles: add command to parse git status --porcelain (#3)');
  t.is(parsed[1].message, 'moved diff modules into sub-dir');
});
