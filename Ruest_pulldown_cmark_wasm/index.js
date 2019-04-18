'use strict'

const wasm = require('./dist/wasm_example')
const fs = require('fs')
const path = require('path')

const markdown = fs.readFileSync(path.join(__dirname, '../input.md'), 'utf8')

console.time('benchmark 10,000')
for (let i = 0; i < 10000; i++) {
  wasm.markdown_to_html(markdown)
}
console.timeEnd('benchmark 10,000')
