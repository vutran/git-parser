/**
 * @jest-environment node
 */

import utils from '../../lib/diff/utils';

describe('utils', () => {
  it('is a file header', () => {
    expect(utils.isFileHeader('--- a/file')).toBe(true);
    expect(utils.isFileHeader('+++ b/file')).toBe(true);
  });

  it('is not a file header', () => {
    expect(utils.isFileHeader('@@ -1,20 +1,20 @@')).not.toBe(true);
  });

  it('is a hunk header', () => {
    expect(utils.isHunkHeader('@@ -1,20 +1,20 @@')).toBe(true);
  });

  it('is not a hunk header', () => {
    expect(utils.isHunkHeader('--- a/file')).not.toBe(true);
  });

  it('get the from file header', () => {
    const line = '--- a/file';
    const file = utils.getFileHeader(line);
    const expected = {
      value: line,
      type: 'from',
      file: 'file',
    };
    expect(file).toEqual(expected);
  });

  it('get the to file header', () => {
    const line = '+++ a/file';
    const file = utils.getFileHeader(line);
    const expected = {
      value: line,
      type: 'to',
      file: 'file',
    };
    expect(file).toEqual(expected);
  });

  it('get an empty file header', () => {
    const line = '@@ -1,20 +5,25 @@';
    const file = utils.getFileHeader(line);
    expect(file).toEqual({});
  });

  it('get the hunk header', () => {
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
    expect(hunk).toEqual(expected);
  });

  it('get an empty hunk header', () => {
    const line = '+++ a/file';
    const hunk = utils.getHunkHeader(line);
    expect(hunk).toEqual({});
  });
});
