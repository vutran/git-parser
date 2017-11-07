import { readFileSync } from 'fs';
import test from 'ava';
import parseLog from '../../lib/log/parseLog';

test('parses the commit hash', t => {
  const log = readFileSync('log.txt').toString();
  const parsed = parseLog(log);
  t.is(parsed.length, 5);
  t.is(parsed[1].hash, 'b404bad1764b01fd3dc940f4cf0a181d28d51a81');
  t.is(parsed[0].hash, '631083a46729c3cb6643f25bc9c089fdd8eae3a3');
});
