import test from 'ava';
import utils from '../../lib/status/utils';
import { STAGED_FILE_REGEX, UNSTAGED_FILE_REGEX, UNTRACKED_FILE_REGEX } from '../../lib/status/regex';


test('map input into status object', t => {
  const status = utils.createStatus('filename', 'm', false);
  t.deepEqual(status, {
    fileName: 'filename',
    status: 'M',
    staged: false
  })
});

test('is a staged regex', t => {
  const result = utils.isStagedRegex(STAGED_FILE_REGEX);
  t.true(result);
});

test('is not a staged regex', t => {
  let result;
    
  result = utils.isStagedRegex(UNSTAGED_FILE_REGEX);
  t.false(result);
  
  result = utils.isStagedRegex(UNTRACKED_FILE_REGEX);
  t.false(result);  
});  

const lineTestCase = [
  'R  somefile.js -> otherfile.js',
  ' A new',
  'M  changed.js',
  ' M foo.test',
  ' D bar.js',
  '?? untracked.md'];

test('filter lines for staged', t => {
  const result = utils.filterLinesBy(STAGED_FILE_REGEX, lineTestCase);
  
  t.is(result.length, 2); 
});

test('filter lines for unstaged', t => {
  const result = utils.filterLinesBy(UNSTAGED_FILE_REGEX, lineTestCase);
  
  t.is(result.length, 3);
});

test('filter lines for untracked', t => {
  const result = utils.filterLinesBy(UNTRACKED_FILE_REGEX, lineTestCase);
  
  t.is(result.length, 1);
});
