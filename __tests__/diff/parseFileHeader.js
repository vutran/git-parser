/**
 * @jest-environment node
 */

import parseFileHeader from '../../lib/diff/parseFileHeader';

describe('parseFileHeader', () => {
  it('parses the file header', () => {
    const diff = `
  --- a/index.js
  +++ b/index.js
   `;
    const parsed = parseFileHeader(diff);
    expect(parsed.length).toBe(2);
    expect(parsed[0]).toEqual({
      lineIndex: 1,
      value: '--- a/index.js',
      type: 'from',
      file: 'index.js',
    });
    expect(parsed[1]).toEqual({
      lineIndex: 2,
      value: '+++ b/index.js',
      type: 'to',
      file: 'index.js',
    });
  });
});
