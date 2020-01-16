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

test('basic', async () => {
  // setup mocking ...
  const mockGetInput = getInput as jest.MockedFunction<typeof getInput>
  mockGetInput.mockReturnValueOnce('xxx')
  mockGetInput.mockReturnValueOnce('l10n')
  mockGetInput.mockReturnValueOnce('open')
  const mockSetOutput = setOutput as jest.MockedFunction<typeof setOutput>
  mockListForRepo.mockReturnValueOnce({ data: [1, 2] })

  // run
  await run()

  // verify
  expect(mockListForRepo).toHaveBeenCalledWith({
    repo: 'issue-count',
    owner: 'kazupon',
    labels: 'l10n',
    state: 'open'
  })
  expect(mockSetOutput).toHaveBeenCalledWith('count', '2')
})

test('default', async () => {
  // setup mocking ...
  const mockGetInput = getInput as jest.MockedFunction<typeof getInput>
  mockGetInput.mockReturnValueOnce('xxx')
  mockGetInput.mockReturnValueOnce('')
  mockGetInput.mockReturnValueOnce('all')
  const mockSetOutput = setOutput as jest.MockedFunction<typeof setOutput>
  mockListForRepo.mockReturnValueOnce({ data: [1, 2] })

  // run
  await run()

  // verify
  expect(mockListForRepo).toHaveBeenCalledWith({
    repo: 'issue-count',
    owner: 'kazupon',
    labels: '',
    state: 'all'
  })
  expect(mockSetOutput).toHaveBeenCalledWith('count', '2')
})

test('state: not supported statet', async () => {
  // setup mocking ...
  const mockGetInput = getInput as jest.MockedFunction<typeof getInput>
  mockGetInput.mockReturnValueOnce('xxx')
  mockGetInput.mockReturnValueOnce('')
  mockGetInput.mockReturnValueOnce('foo')
  const mockSetOutput = setOutput as jest.MockedFunction<typeof setOutput>
  mockListForRepo.mockReturnValueOnce({ data: [1, 2] })

  // run
  await run()

  // verify
  expect(mockListForRepo).toHaveBeenCalledWith({
    repo: 'issue-count',
    owner: 'kazupon',
    labels: '',
    state: 'all'
  })
  expect(mockSetOutput).toHaveBeenCalledWith('count', '2')
})
