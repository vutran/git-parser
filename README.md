# git-parser

[![Travis](https://img.shields.io/travis/vutran/git-parser/master.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/vutran/git-parser) [![Coveralls branch](https://img.shields.io/coveralls/vutran/git-parser/master.svg?maxAge=2592000&style=flat-square)](https://coveralls.io/github/vutran/git-parser) [![license](https://img.shields.io/github/license/vutran/git-parser.svg?maxAge=2592000&style=flat-square)](LICENSE)

> Parse Git output

## Install

```bash
$ npm install --save git-parser
```

## Example

```js
const { exec } = require('child_process');
const { parseDiff } = require('git-parser');

exec('git diff', (err, stdout, stderr) => {

  // parse the output of "git diff"
  const diffs = parseDiff(stdout);

  // array of diff objects
  console.log(diffs);

});
```

## API

### parseDiff(output)

Returns an array of changes between commits.

#### output

Type: `string`

The diff output string

### parseHunkHeader

Returns an array of hunk headers.

#### output

Type: `string`

The diff output string

### parseFileHeader

Returns an array of hunk headers.

#### output

Type: `string`

The diff output string

### parseStatus(output)

Returns an array of working files' status using `--porcelain` option

```js
const { exec } = require('child_process');
const { parseStatus } = require('git-parser');

exec('git status --porcelain', (err, stdout, stderr) => {

  // parse the output of "git status --porcelain". works with --branch to get branch name
  const statuses = parseStatus(stdout);

  console.log(statuses);

});
```

#### output

Type: `object`

JSON Schema

```json
{
  "type": "object",
  "properties": {
    "branch": {
      "type": "string",
      "description": "if no branch is in input, it will return 'default'"
    },
    "statuses": {
      "type": "array",
      "properties": {
        "staged": {
          "type": "boolean",
          "description": "if false, it will be either unstaged or untracked (untracked would have a status of '??')"
        },
        "fileName": {
          "type": "string"
        },
        "status": {
          "type": "string",
          "description": "Uppercase status code: M = modified, A = added, D = deleted, R = renamed, C = copied, ?? = untracked"
        }
      }
    }
  }
}
```

## License

MIT © [Vu Tran](https://github.com/vutran/)
