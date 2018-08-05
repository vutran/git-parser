/**
 * @jest-environment node
 */

import { resolve } from 'path';
import { readFileSync } from 'fs';
import parseLog from '../../lib/log/parseLog';

const LOG_FILE = resolve(__dirname, 'log.txt');

const log = readFileSync(LOG_FILE).toString();

describe('parseLog', () => {
  it('parses the branch', () => {
    const parsed = parseLog(log);
    expect(parsed[0].branch.length).toBe(3);
    expect(parsed[0].branch[1]).toBe('origin/master');
  });

  it('returns empty array if commit has no branch information', () => {
    const parsed = parseLog(log);
    expect(parsed[1].branch.length).toBe(0);
  });

  it('parses the tag', () => {
    const parsed = parseLog(log);
    expect(parsed[3].branch[0]).toBe('tag: v0.2.0');
  });

  it('parses the author name', () => {
    const parsed = parseLog(log);
    expect(parsed[0].author.name).toBe('Jonathan Yee');
    expect(parsed[1].author.name).toBe('Vu Tran');
  });

  it('parses the author email', () => {
    const parsed = parseLog(log);
    expect(parsed[0].author.email).toBe('jonyeezs@users.noreply.github.com');
    expect(parsed[1].author.email).toBe('vu.tran@thermofisher.com');
  });

  it('parses the commit hash', () => {
    const parsed = parseLog(log);
    expect(parsed.length).toBe(5);
    expect(parsed[1].hash).toBe('b404bad1764b01fd3dc940f4cf0a181d28d51a81');
    expect(parsed[0].hash).toBe('631083a46729c3cb6643f25bc9c089fdd8eae3a3');
  });

  it('parses the date', () => {
    const parsed = parseLog(log);
    expect(parsed[0].date).toBe(Date.parse('Sat Oct 28 16:26:00 2017 +1000'));
  });

  it('parses the commit message', () => {
    const parsed = parseLog(log);
    expect(parsed[0].message).toBe(':sparkles: add command to parse git status --porcelain (#3)');
    expect(parsed[1].message).toBe('moved diff modules into sub-dir');
  });

});
