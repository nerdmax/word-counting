import * as Sentry from '@sentry/browser'
Sentry.init({ dsn: 'https://d4dbb1184d474e20a856e0ce3ae1cbda@sentry.io/1387790' })

const regex = require('word-regex')
const h2p = require('html2plaintext')

type Config = {
  isHtml?: boolean
  isUnique?: boolean
}

type Result = {
  wordsCount: number
}

const wordsCounter = (text: string, config?: Config): Result => {
  const result: Result = {
    wordsCount: 0
  }

  try {
    const plainText = config && config.isHtml ? h2p(text) : text

    if (plainText.length > 0) {
      const match = plainText.match(regex())
      result.wordsCount = match && match.length
    }
  } catch (err) {
    /* istanbul ignore next */
    Sentry.captureException(err)
    /* istanbul ignore next */
    throw err
  }
  return result
}

export default wordsCounter
