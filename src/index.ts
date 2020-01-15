import core from '@actions/core'
import run from './issue-count'

process.on('uncaughtException', err => {
  console.error('uncaughtException', err)
  core.setFailed(err.message)
})

process.on('unhandledRejection', reason => {
  console.error('unhandledRejection', reason)
  if (reason) {
    core.setFailed(JSON.stringify(reason))
  } else {
    core.setFailed(`unhandledRejection error: ${reason}`)
  }
})

// fire!
run()
