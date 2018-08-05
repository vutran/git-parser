/**
 * @jest-environment node
 */

import parseDiff from '../../lib/diff/parseDiff';

describe('parseDiff', () => {
  it('parses the given diff', () => {
    const diff = `
  diff --git a/index.js b/index.js
  index af52980..5b0f6bb 100644
  --- a/index.js
  +++ b/index.js
  @@ -17,9 +17,6 @@ const left = blessed.box({
     keys: true,
     scrollable: true,
     alwaysScroll: true,
  -  // border: {
  -  //   type: 'line',
  -  // },
  +  content: '',
   });

  @@ -29,9 +26,6 @@ const right = blessed.box({
     width: '50%',
     height: '100%',
     scrollable: true,
  -  // border: {
  -  //   type: 'line',
  -  // },
     content: '',
   });
   `;
    const parsed = parseDiff(diff);

    expect(parsed[3]).toEqual({
      number: 0,
      type: 'file',
      data: {
        value: '--- a/index.js',
        type: 'from',
        file: 'index.js',
      },
      value: '--- a/index.js',
    });

    expect(parsed[5]).toEqual({
      number: 0,
      type: 'hunk',
      data: {
        from: {
          start: 17,
          count: 9,
        },
        to: {
          start: 17,
          count: 6,
        },
        value: '@@ -17,9 +17,6 @@ const left = blessed.box({',
      },
      value: '@@ -17,9 +17,6 @@ const left = blessed.box({',
    });

    expect(parsed[9]).toEqual({
      number: 4,
      type: 'deleted',
      data: null,
      value: '-  // border: {',
    });

    expect(parsed[12]).toEqual({
      number: 7,
      type: 'inserted',
      data: null,
      value: '+  content: \'\',',
    });
  });
});
