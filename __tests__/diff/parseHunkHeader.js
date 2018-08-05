/**
 * @jest-environment node
 */

import parseHunkHeader from '../../lib/diff/parseHunkHeader';

describe('parseHunkHeader', () => {
  it('parses the file header', () => {
    const diff = `
  diff --git a/index.js b/index.js
  index af52980..5b0f6bb 100644
  --- a/index.js
  +++ b/index.js
  @@ -17,9 +17,6 @@
  const left = blessed.box({
     keys: true,
     scrollable: true,
     alwaysScroll: true,
  -  // border: {
  -  //   type: 'line',
  -  // },
     content: '',
   });
   `;
    const parsed = parseHunkHeader(diff);
    expect(parsed.length).toBe(1);
    expect(parsed[0]).toEqual({
      lineIndex: 5,
      value: '@@ -17,9 +17,6 @@',
      from: {
        start: 17,
        count: 9,
      },
      to: {
        start: 17,
        count: 6,
      },
    });
  });
});
