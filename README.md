# kazupon/issue-count

An Action to count GitHub issues

![](https://github.com/kazupon/issue-count/workflows/Unit%20Test/badge.svg)
![](https://github.com/kazupon/issue-count/workflows/E2E%20Test/badge.svg)
[![codecov](https://codecov.io/gh/kazupon/issue-count/branch/master/graph/badge.svg)](https://codecov.io/gh/kazupon/issue-count)


## Counting Filter
- labels


## Inputs

### `github-token`

**Required** GitHub Token.

### `labels`

The label of GitHub issues, Default empty string (`''`).

If you want to specify multiple labels, you can use as `,` delimiter (e.g. `label1,label2`)


## Outputs

### `count`

GitHub issues count.


## Example usage

```yml
uses: kazupon/issue-count
with:
  github-token: ${{ secrets.GITHUB_TOKEN }}
  labels: 'l10n'
```


## :copyright: License

[MIT](http://opensource.org/licenses/MIT)
