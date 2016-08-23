# git-parser

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

## License

MIT © [Vu Tran](https://github.com/vutran/)
