/**
 * @jest-environment node
 */

import parseBranch from '../../lib/status/parseBranch';

it('parses the branch', () => {
  const status = 
`## feature/git-status
R  lib/diff/parseHunkHeader.js -> lib/diff/parseHunkHeadter.js
 D lib/diff/utils.js
 M lib/status/parseStagedStatus.js`;
  
  const parsed = parseBranch(status);
  expect(parsed).toBe('feature/git-status');
});

it('defaults the branch name', () => {
  const status = `R  lib/diff/parseHunkHeader.js -> lib/diff/parseHunkHeadter.js
 D lib/diff/utils.js
 M lib/status/parseStagedStatus.js`;
  
  const parsed = parseBranch(status);
  expect(parsed).toBe('default');
});
