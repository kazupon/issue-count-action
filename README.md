# kazupon/issue-count

An Action to count GitHub issues

![](https://github.com/kazupon/issue-count/workflows/Unit%20Test/badge.svg)
![](https://github.com/kazupon/issue-count/workflows/E2E%20Test/badge.svg)
[![codecov](https://codecov.io/gh/kazupon/issue-count/branch/master/graph/badge.svg)](https://codecov.io/gh/kazupon/issue-count)


## Counting Filter
- labels
- state


## Inputs

### `github-token`

**Required** GitHub Token.

### `labels`

The label of GitHub issues, Default empty string (`''`).

If you want to specify multiple labels, you can use as (`,`) delimiter (e.g. `label1,label2`)

### `state`

The state of GitHub issues, Default `all`.

In about state that you can specify, See the [GitHub API docs](https://developer.github.com/v3/pulls/#list-pull-requests).


## Outputs

### `count`

GitHub issues count.


## Example usage

```yml
uses: kazupon/issue-count
with:
  github-token: ${{ secrets.GITHUB_TOKEN }}
  labels: l10n
  state: open
```


## :copyright: License

[MIT](http://opensource.org/licenses/MIT)
