import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import alias from 'rollup-plugin-alias'
import babel from 'rollup-plugin-babel'
import babili from 'rollup-plugin-babili'
import fs from 'fs-extra'
import combo from 'random-a11y-combo'
import * as hero from './index'

// Do some preprocessing to make sure the build goes right.
// Kind of gross to do it here,
// but that's sort of what Rollup is for, right?
// To build the site?

// delete 'dist', so that copying the index.html works
if (fs.existsSync('dist')) fs.emptyDirSync('dist')
// create 'dist', should always fire
if (!fs.existsSync('dist')) fs.mkdirSync('dist')
// copy index.html to 'dist'
fs.copySync('./site/index.html', './dist/index.html')
// pre-generate color combinations
// this can make the build hang but speeds up the site tremendously
let combos = []
let num = process.env.NODE_ENV === 'production' ? Object.keys(hero).length * 10 : 69
for (let i = num; i--;) {
  combos.push(combo())
}
fs.outputJsonSync('./dist/combos.json', combos)

// OK now on to the actual Rollup stuff

let plugs = [
  alias({
    resolve: ['.json'],
    combos: './../dist/combos'
  }),
  resolve({
    main: true,
    jsnext: true,
    preferBuiltins: true
  }),
  commonjs(),
  json(),
  babel({
    exclude: 'node_modules/**'
  })
]

if (process.env.NODE_ENV === 'production') {
  plugs.push(
    babili({
      comments: false
    })
  )
}

export default {
  entry: './site/main.js',
  dest: './dist/bundle.js',
  format: 'es',
  plugins: plugs
}
