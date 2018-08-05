/**
 * @jest-environment node
 */

import { parseStatus } from '../../lib/index';

it('parses the given status', () => {
  const status = `## feature/git-status
A  lib/foo/bar.js
 D utils.js
?? config.json`;
  
  const parsed = parseStatus(status);
  
  expect(parsed.branch).toBe('feature/git-status');
  
  expect(parsed.statuses[0]).toEqual({
    staged: true,
    fileName: 'lib/foo/bar.js',
    status: 'A'
  });
  
  expect(parsed.statuses[1]).toEqual({
    staged: false,
    fileName: 'utils.js',
    status: 'D'
  });
  
  expect(parsed.statuses[2]).toEqual({
    staged: false,
    fileName: 'config.json',
    status: '??'    
  });
});
