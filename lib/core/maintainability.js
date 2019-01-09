module.exports = {
  rules: {
    'cyclomatic-complexity': {
      severity: 'error',
      options: 25,
    },

    deprecation: { severity: 'error' },

    eofline: { severity: 'error' },

    indent: {
      severity: 'error',
      options: [
        'spaces',
        2,
      ],
    },

    'linebreak-style': {
      severity: 'error',
      options: 'LF',
    },

    'max-classes-per-file': {
      severity: 'error',
      options: [1],
    },

    'max-file-line-count': {
      severity: 'error',
      options: 300,
    },

    'max-line-length': {
      severity: 'error',
      options: { limit: 100 },
    },

    'no-default-export': { severity: 'off' },

    'no-default-import': { severity: 'off' },

    'no-duplicate-imports': { severity: 'error' },

    'no-mergeable-namespace': { severity: 'error' },

    'no-require-imports': { severity: 'error' },

    'object-literal-sort-keys': { severity: 'off' },

    'prefer-const': {
      severity: 'off',
      options: { 'destructuring': 'all' },
    },

    'prefer-readonly': { severity: 'error' },

    'trailing-comma': { severity: 'off' },
  },
};
