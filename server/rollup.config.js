import pkg from './package.json'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {

  input: 'src/index.js',

  output: [{
    file: pkg.main,
    format: 'cjs',
    exports: 'named',
  }],

  external: [
    ...Object.keys(pkg.dependencies || {}),
    '@babel/runtime/helpers/inheritsLoose',
    '@babel/runtime/helpers/assertThisInitialized',
    '@babel/runtime/helpers/defineProperty',
    '@babel/runtime/helpers/extends',
    '@babel/runtime/helpers/wrapNativeSuper',
    '@babel/runtime/regenerator',
    '@babel/runtime/helpers/asyncToGenerator',
  ],

  plugins: [

    resolve(),

    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),

  ],

}