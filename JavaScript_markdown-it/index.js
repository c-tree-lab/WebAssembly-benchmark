'use strict'

const md = require('markdown-it')();
const fs = require('fs')
const path = require('path')

const markdown = fs.readFileSync(path.join(__dirname, '../input.md'), 'utf8')

console.time('benchmark 10,000')
for (let i = 0; i < 10000; i++) {
  const html = md.render(markdown)
}
console.timeEnd('benchmark 10,000')
