import { getInput, setOutput } from '@actions/core'
import run from '../src/issue-count'

// ------
// mocks

const mockListForRepo = jest.fn()
jest.mock('@actions/core')
jest.mock('@actions/github', () => ({
  context: {
    repo: {
      repo: 'issue-count',
      owner: 'kazupon'
    }
  },
  GitHub: jest.fn().mockImplementation(() => {
    return { issues: { listForRepo: mockListForRepo }}
  })
}))

// --------------------
// setup/teadown hooks

afterEach(() => {
  jest.clearAllMocks()
})

test('run', async () => {
  // setup mocking ...
  const mockGetInput = getInput as jest.MockedFunction<typeof getInput>
  mockGetInput.mockReturnValueOnce('xxx')
  mockGetInput.mockReturnValueOnce('l10n')
  const mockSetOutput = setOutput as jest.MockedFunction<typeof setOutput>
  mockListForRepo.mockReturnValueOnce({ data: [1, 2] })

  // run
  await run()

  // verify
  expect(mockListForRepo).toHaveBeenCalledWith({
    repo: 'issue-count',
    owner: 'kazupon',
    labels: 'l10n',
    state: 'all'
  })
  expect(mockSetOutput).toHaveBeenCalledWith('count', '2')
})
