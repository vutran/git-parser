import test from 'ava';
import { parseStatus } from '../../lib/index';

test('parses the given status', t => {
  const status = `## feature/git-status
A  lib/foo/bar.js
 D utils.js
?? config.json`;
  
  const parsed = parseStatus(status);
  
  t.is(parsed.branch, 'feature/git-status');
  
  t.deepEqual(parsed.statuses[0], {
    staged: true,
    fileName: 'lib/foo/bar.js',
    status: 'A'
  });
  
  t.deepEqual(parsed.statuses[1], {
    staged: false,
    fileName: 'utils.js',
    status: 'D'
  });
  
  t.deepEqual(parsed.statuses[2], {
    staged: false,
    fileName: 'config.json',
    status: '??'    
  });
});
