import { readFileSync } from 'fs';
import test from 'ava';
import parseLog from '../../lib/log/parseLog';

test('parses the author name', t => {
  const log = readFileSync('log.txt').toString();
  const parsed = parseLog(log);

  t.is(parsed[0].author.name, 'Jonathan Yee');
  t.is(parsed[1].author.name, 'Vu Tran');
});

test('parses the author email', t => {
  const log = readFileSync('log.txt').toString();
  const parsed = parseLog(log);

  t.is(parsed[0].author.email, 'jonyeezs@users.noreply.github.com');
  t.is(parsed[1].author.email, 'vu.tran@thermofisher.com');
});
