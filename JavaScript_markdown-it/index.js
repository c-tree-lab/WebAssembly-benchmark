'use strict'

const md = require('markdown-it')()
const fs = require('fs')
const path = require('path')

const markdown = fs.readFileSync(path.join(__dirname, '../input.md'), 'utf8')

console.time('benchmark 1')
md.render(markdown)
console.timeEnd('benchmark 1')

console.time('benchmark 10,000')
for (let i = 0; i < 10000; i++) {
  md.render(markdown)
}
console.timeEnd('benchmark 10,000')

console.time('benchmark 100,000')
for (let i = 0; i < 100000; i++) {
  md.render(markdown)
}
console.timeEnd('benchmark 100,000')
