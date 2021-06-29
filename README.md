# issue-count-action

An Action to count GitHub issues

[![Unit Test](https://github.com/kazupon/issue-count-action/actions/workflows/unit.yml/badge.svg)](https://github.com/kazupon/issue-count-action/actions/workflows/unit.yml)
[![E2E Test](https://github.com/kazupon/issue-count-action/actions/workflows/e2e.yml/badge.svg)](https://github.com/kazupon/issue-count-action/actions/workflows/e2e.yml)


## :rocket: Usage

```yml
uses: kazupon/issue-count-action
with:
  github-token: ${{ secrets.GITHUB_TOKEN }}
  labels: l10n
  state: open
```

## :arrow_left: Inputs

### `github-token`

**Required** GitHub token.

### `labels`

The label of GitHub issues, Default empty string (`''`).

If you want to specify multiple labels, you can use as (`,`) delimiter (e.g. `label1,label2`)

### `state`

The state of GitHub issues, Default `all`.

In about state that you can specify, See the [GitHub API docs](https://developer.github.com/v3/pulls/#list-pull-requests).


## :arrow_right: Outputs

### `count`

GitHub issues count.


## :copyright: License

[MIT](http://opensource.org/licenses/MIT)
