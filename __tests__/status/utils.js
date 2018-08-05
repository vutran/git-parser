/**
 * @jest-environment node
 */

import utils from '../../lib/status/utils';
import { STAGED_FILE_REGEX, UNSTAGED_FILE_REGEX, UNTRACKED_FILE_REGEX } from '../../lib/status/regex';

describe('utils', () => {
  it('map input into status object', () => {
    const status = utils.createStatus('filename', 'm', false);
    expect(status).toEqual({
      fileName: 'filename',
      status: 'M',
      staged: false
    })
  });

  it('is a staged regex', () => {
    const result = utils.isStagedRegex(STAGED_FILE_REGEX);
    expect(result).toBe(true);
  });

  it('is not a staged regex', () => {
    let result;
      
    result = utils.isStagedRegex(UNSTAGED_FILE_REGEX);
    expect(result).toBe(false);
    
    result = utils.isStagedRegex(UNTRACKED_FILE_REGEX);
    expect(result).toBe(false);
  });  

  const lineTestCase = [
    'R  somefile.js -> otherfile.js',
    ' A new',
    'M  changed.js',
    ' M foo.test',
    ' D bar.js',
    '?? untracked.md'];

  it('filter lines for staged', () => {
    const result = utils.filterLinesBy(STAGED_FILE_REGEX, lineTestCase);
    expect(result.length).toBe(2); 
  });

  it('filter lines for unstaged', () => {
    const result = utils.filterLinesBy(UNSTAGED_FILE_REGEX, lineTestCase);
    expect(result.length).toBe(3);
  });

  it('filter lines for untracked', () => {
    const result = utils.filterLinesBy(UNTRACKED_FILE_REGEX, lineTestCase);
    expect(result.length).toBe(1);
  });
});
