module.exports = {
  rules: {
    align: {
      severity: 'error',
      options: [
        'parameters',
        'statements',
        'members',
        'elements',
      ],
    },

    'array-type': {
      severity: 'error',
      options: ['array-simple'],
    },

    // Should be checked by ESLint
    'arrow-parens': { severity: 'off' },

    // Should be checked by ESLint
    'arrow-return-shorthand': { severity: 'off' },

    'binary-expression-operand-order': { severity: 'error' },

    'callable-types': { severity: 'error' },

    'class-name': { severity: 'error' },

    'comment-format': {
      severity: 'error',
      options: [
        'check-space',
        'check-uppercase',
        {
          'ignore-words': ['eslint'],
        },
      ],
    },

    'comment-type': {
      severity: 'error',
      options: [
        'singleline',
        'multiline',
        'doc'
      ],
    },

    'completed-docs': { severity: 'off' },

    encoding: { severity: 'error' },

    'file-header': { severity: 'off' },

    'file-name-casing': {
      severity: 'off',
      options: {
        'index.tsx': 'kebab-case',
        '.tsx': 'pascal-case',
        '.ts': 'kebab-case',
      },
    },

    'import-spacing': { severity: 'off' },

    'increment-decrement': {
      severity: 'error',
      options: ['allow-post'],
    },

    'interface-name': {
      severity: 'error',
      options: ['never-prefix'],
    },

    'interface-over-type-literal': { severity: 'error' },

    'jsdoc-format': {
      severity: 'error',
      options: ['check-multiline-start'],
    },

    'match-default-export-name': { severity: 'off' },

    'newline-before-return': { severity: 'error' },

    'newline-per-chained-call': { severity: 'off' },

    'new-parens': { severity: 'error' },

    'no-angle-bracket-type-assertion': { severity: 'error' },

    'no-boolean-literal-compare': { severity: 'error' },

    'no-consecutive-blank-lines': {
      severity: 'error',
      options: [2],
    },

    'no-irregular-whitespace': { severity: 'error' },

    'no-parameter-properties': { severity: 'error' },

    'no-redundant-jsdoc': { severity: 'error' },

    'no-reference-import': { severity: 'error' },

    'no-trailing-whitespace': { severity: 'error' },

    'no-unnecessary-callback-wrapper': { severity: 'error' },

    'no-unnecessary-initializer': { severity: 'error' },

    'no-unnecessary-qualifier': { severity: 'error' },

    'number-literal-format': { severity: 'error' },

    'object-literal-key-quotes': {
      severity: 'error',
      options: ['as-needed']
    },

    'object-literal-shorthand': { severity: 'error' },

    'one-line': {
      severity: 'error',
      options: [
        'check-catch',
        'check-finally',
        'check-else',
        'check-open-brace',
        'check-whitespace',
      ],
    },

    'ordered-imports': { severity: 'off' },

    'one-variable-per-declaration': { severity: 'error' },

    'prefer-function-over-method': { severity: 'error' },

    'prefer-method-signature': { severity: 'error' },

    'prefer-switch': {
      severity: 'error',
      options: [{ 'min-cases': 2 }],
    },

    'prefer-template': { severity: 'error' },

    'prefer-while': { severity: 'error' },

    quotemark: {
      severity: 'error',
      options: [
        'single',
        'jsx-double',
        'avoid-template',
      ],
    },

    'return-undefined': { severity: 'error' },

    semicolon: {
      severity: 'error',
      options: [
        'always',
        'ignore-interfaces'
      ],
    },

    'space-before-function-paren': { severity: 'off' },

    'space-within-parens': { severity: 'off' },

    'switch-final-break': {
      severity: 'error',
      options: ['always']
    },

    'type-literal-delimiter': { severity: 'off' },

    'unnecessary-bind': { severity: 'error' },

    'variable-name': { severity: 'off' },

    whitespace: {
      severity: 'off',
      options: [
        'check-branch',
        'check-decl',
        'check-operator',
        'check-module',
        'check-separator',
        'check-rest-spread',
        'check-type',
        'check-typecast',
        'check-type-operator',
        'check-preblock',
        'check-postbrace',
      ],
    },
  },
};