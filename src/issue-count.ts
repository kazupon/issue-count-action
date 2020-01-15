import { getInput, setOutput } from '@actions/core'
import { context, GitHub } from '@actions/github'

export default async function run () {
  const token = getInput('github-token', { required: true })
  const labels = getInput('labels')
  const opts = {}
  const client = new GitHub(token, opts)
  const { owner, repo } = context.repo
  const issues = await client.issues.listForRepo({
    labels,
    owner,
    repo,
    state: 'all'
  })
  console.log(`issues count: ${issues.data.length}`)
  setOutput('count', issues.data.length.toString())
}
