import * as Sentry from '@sentry/browser'
Sentry.init({ dsn: 'https://d4dbb1184d474e20a856e0ce3ae1cbda@sentry.io/1387790' })

const regex = require('word-regex')
const h2p = require('html2plaintext')

/**
 * The config settings for the wordsCounter function
 * @interface Config
 */
interface Config {
  /**
   * Set to true if you want to process html formated text and the counter
   * won't count tags.
   * @memberof Config
   */
  isHtml?: boolean
  isUnique?: boolean
}

/**
 * The result that the wordsCounter function return.
 * @interface Result
 */
interface Result {
  /**
   * The amount of the words in the passed text
   * @memberof Result
   */
  wordsCount: number
}

/**
 * The function that can count the words occurrence in text
 * @param text The string that you want to count words
 * @param config The config settings for the wordsCounter function
 * @returns an object that has the words occurrence information
 */
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
