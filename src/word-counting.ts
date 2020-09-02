const htmlToText = require('html-to-text')
const regex = require('word-regex')

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

  const plainText =
    config && config.isHtml
      ? htmlToText.fromString(text, { ignoreHref: true, ignoreImage: true })
      : text

  if (plainText.length > 0) {
    const match = plainText.match(regex())
    result.wordsCount = match ? match.length : 0
  }

  return result
}

export default wordsCounter
