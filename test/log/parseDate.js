import { readFileSync } from 'fs';
import test from 'ava';
import parseLog from '../../lib/log/parseLog';

test('parses the date', t => {
  const log = readFileSync('log.txt').toString();
  const parsed = parseLog(log);

  t.is(parsed[0].date, Date.parse('Sat Oct 28 16:26:00 2017 +1000'));
});
