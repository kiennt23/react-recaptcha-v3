module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-perf/recommended',
    'standard',
    'standard-react',
    'plugin:jsx-a11y/recommended'
  ],
  'plugins': [
    'dependencies',
    'babel',
    'import',
    'filenames',
    'jsx-a11y',
    'html',
    'ascii',
    'promise',
    'promiseparams',
    'react',
    'optimize-regex',
    'react-perf',
    'standard',
    'no-inferred-method-name',
    'react-functional-set-state'
  ],
  'env': {
    'browser': true,
    'es6': true
  },
  'globals': {
    '__DEV__': false,
    '__PROD__': false,
    '__PLAYER_DEBUG__': false,
    '__BASENAME__': false
  },
  'settings': {
    'ecmascript': 6,
    'import/resolver': 'webpack'
  },
  'rules': {
    'ascii/valid-name': 2,
    'optimize-regex/optimize-regex': 'warn',
    'promiseparams/promiseparams': 2,
    'filenames/no-index': 0,
    'filenames/match-regex': [2, '^[a-z0-9-.]+$', true],
    'filenames/match-exported': [2, ['camel', 'kebab', null]],
    'template-curly-spacing': ["error", "never"],
    indent: ["error", 2],
    'comma-dangle': [
      'error',
      {
        objects: 'only-multiline',
        arrays: 'only-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    'dependencies/case-sensitive': 1,
    'dependencies/no-cycles': 1,
    'dependencies/no-unresolved': 1,
    'dependencies/require-json-ext': 1,
    'react-functional-set-state/no-this-state-props': 2,
    'no-void': 2,
    'no-restricted-globals': 2,
    'no-use-before-define': 2,
    'func-names': 1,
    'no-unused-vars': 2,
    'guard-for-in': 2,
    'no-restricted-syntax': 2,

    'jsx-a11y/label-has-for': 'off',
    'no-console': 'off',
    // 'react/no-typos': 'off',
    'max-len': 'off',
    'no-nested-ternary': 'off',
    'camelcase': [
      2,
      {
        'properties': 'never'
      }
    ],
    'react-redux/prefer-separate-component-file': 'off',
    'react/destructuring-assignment': 'off',
    'babel/no-invalid-this': 1,
    'babel/semi': 0,
    'spaced-comment': 0,
    'brace-style': 0,
    'no-trailing-spaces': 0,
    'import/default': 2,
    'import/no-unresolved': [
      2,
      {
        'commonjs': true,
        'amd': true
      }
    ],
    'import/named': 2,
    'import/namespace': 2,
    'import/export': 2,
    'import/no-duplicates': 2,
    'import/imports-first': 2
  },
  'parserOptions': {
    'sourceType': 'module'
  }
}
