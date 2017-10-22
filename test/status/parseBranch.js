import test from 'ava';
import parseBranch from '../../lib/status/parseBranch';

test('parses the branch', t => {
  const status = 
`## feature/git-status
R  lib/diff/parseHunkHeader.js -> lib/diff/parseHunkHeadter.js
 D lib/diff/utils.js
 M lib/status/parseStagedStatus.js`;
  
  const parsed = parseBranch(status);
  t.is(parsed, 'feature/git-status');
});

test('defaults the branch name', t => {
  const status = `R  lib/diff/parseHunkHeader.js -> lib/diff/parseHunkHeadter.js
 D lib/diff/utils.js
 M lib/status/parseStagedStatus.js`;
  
  const parsed = parseBranch(status);
  t.is(parsed, 'default');
});
