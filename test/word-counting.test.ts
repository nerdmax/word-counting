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
    test('p tag', () => {
      const mockedText = '<p>These are some mocked words with html format</p>'
      expect(wordsCounter(mockedText).wordsCount).toEqual(10)
      expect(wordsCounter(mockedText, { isHtml: true }).wordsCount).toEqual(8)
    })

    test('image tag', () => {
      const mockedText = '<img src="pic_trulli.jpg" alt="Italian Trulli">'
      expect(wordsCounter(mockedText).wordsCount).toEqual(7)
      expect(wordsCounter(mockedText, { isHtml: true }).wordsCount).toEqual(0)
    })

    test('link tag', () => {
      const mockedText = '<a href="www.github.com">Github</a>'
      expect(wordsCounter(mockedText).wordsCount).toEqual(7)
      expect(wordsCounter(mockedText, { isHtml: true }).wordsCount).toEqual(1)
    })

    test('nested tags', () => {
      const mockedText =
        '<div><div>These are some</div><div>mocked words with html format</div></div>'
      expect(wordsCounter(mockedText).wordsCount).toEqual(14)
      expect(wordsCounter(mockedText, { isHtml: true }).wordsCount).toEqual(8)
    })
  })
})
