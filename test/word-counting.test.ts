import wordsCounter from '../src/word-counting'

describe('word-counting', () => {
  describe('with empty text', () => {
    test('counts words', () => {
      const mockedText = ''
      expect(wordsCounter(mockedText).wordsCount).toEqual(0)
    })
  })

  describe('with punctuation text', () => {
    test('counts words', () => {
      const mockedText = ','
      expect(wordsCounter(mockedText).wordsCount).toEqual(0)
    })
  })

  describe('with plain text', () => {
    test('counts words', () => {
      const mockedText = 'These are some mocked words.'
      expect(wordsCounter(mockedText).wordsCount).toEqual(5)
    })
  })

  describe('with html text', () => {
    test('counts words', () => {
      const mockedText = '<p>These are some mocked words with html format</p>'
      expect(wordsCounter(mockedText).wordsCount).toEqual(10)
      expect(wordsCounter(mockedText, { isHtml: true }).wordsCount).toEqual(8)
    })
  })
})
