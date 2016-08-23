import test from 'ava';
import parseHunkHeader from '../lib/parseHunkHeader';

test('parses the file header', t => {
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
  t.is(parsed.length, 1);
  t.deepEqual(parsed[0], {
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
