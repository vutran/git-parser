import test from 'ava';
import parseDiff from '../lib/parseDiff';

test('parses the given diff', t => {
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
   content: '',
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
  t.deepEqual(parsed[3], {
    number: 0,
    type: 'file',
    data: {
      value: '--- a/index.js',
      type: 'from',
      file: 'index.js',
    },
    value: '--- a/index.js',
  });
});
