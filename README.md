# Word counting

[![Greenkeeper badge](https://badges.greenkeeper.io/nerdmax/word-counting.svg)](https://greenkeeper.io/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

[![NPM Version][npm-image]][npm-url]
[![License Stats][npm-license]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]
[![Github stars][github-stars]][github-url]
[![Github issues][github-issues]][github-issues-url]
[![Build Status](https://travis-ci.org/nerdmax/word-counting.svg?branch=master)](https://travis-ci.org/nerdmax/word-counting)
[![codecov](https://codecov.io/gh/nerdmax/word-counting/branch/master/graph/badge.svg)](https://codecov.io/gh/nerdmax/word-counting)
[![Dev Dependencies](https://david-dm.org/nerdmax/word-counting.svg)](https://david-dm.org/nerdmax/word-counting?type=dev)

[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg)](https://paypal.me/nerdmax)

> A very powerful words counter that supports plain text and html.

[![nodei.co][npm-io]][npm-url]

- [Word counting](#word-counting)
  - [Why this project](#why-this-project)
  - [Installation](#installation)
  - [Basic Usage](#basic-usage)
  - [Contributing](#contributing)
  - [Contributors](#contributors)

## Why this project

- Support node and browser environment.
- Support html formated text. (Won't count tags)
- Well typed

## Installation

```shell
# Using npm
npm install --save word-counting

# Using yarn
yarn add word-counting
```

## Basic Usage

Inject the library in your file:

```javascript
// javascript
var wordsCounter = require('word-counting')
```

```typescript
// typescript
import wordsCounter from 'word-counting'
```

Count the words for plain text:

```typescript
const mockedText = 'These are some mocked words.'
console.log(wordsCounter(mockedText).wordsCount) // 5
```

Count the words for html:

```typescript
const mockedText = '<p>These are some mocked words with html format</p>'
console.log(wordsCounter(mockedText, { isHtml: true }).wordsCount) // 8
```

## Contributing

1. Fork it (<https://github.com/nerdmax/word-counting/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/npm/v/word-counting.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/word-counting
[npm-license]: https://img.shields.io/npm/l/word-counting.svg
[npm-downloads]: https://img.shields.io/npm/dm/word-counting.svg?style=flat-square
[github-url]: https://github.com/nerdmax/word-counting
[github-issues]: https://img.shields.io/github/issues/nerdmax/word-counting.svg
[github-issues-url]: https://github.com/nerdmax/word-counting/issues
[github-stars]: https://img.shields.io/github/stars/nerdmax/word-counting.svg
[travis-image]: https://img.shields.io/travis/dbader/node-word-counting/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-word-counting
[npm-io]: https://nodei.co/npm/word-counting.png?downloads=true&downloadRank=true&stars=true
[wiki]: https://github.com/nerdmax/word-counting/wiki

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/18550349?v=4" width="100px;"/><br /><sub><b>Max Liu</b></sub>](https://github.com/nerdmax)<br />[💻](https://github.com/nerdmax/word-counting/commits?author=nerdmax "Code") [📖](https://github.com/nerdmax/word-counting/commits?author=nerdmax "Documentation") [🚇](#infra-nerdmax "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/nerdmax/word-counting/commits?author=nerdmax "Tests") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
