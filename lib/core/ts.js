module.exports = {
  rules: {
    'adjacent-overload-signatures': { severity: 'error' },

    'ban-ts-ignore': { severity: 'warning' },

    'ban-types': {
      severity: 'error',
      options: [
        ['String'],
        ['Number'],
        ['Boolean']
      ],
    },

    'member-access': {
      severity: 'error',
      options: [
        'check-accessor',
        'check-constructor',
      ],
    },

    'member-ordering': {
      severity: 'error',
      options: [
        'static-field',
        'static-method',
        'instance-field',
        'constructor',
        'instance-method',
      ],
    },

    'no-any': { severity: 'warning' },

    'no-empty-interface': { severity: 'error' },

    'no-import-side-effect': {
      severity: 'error',
      options: { 'ignore-module': '\\.css$' },
    },

    'no-inferrable-types': {
      severity: 'error',
      options: ['ignore-params'],
    },

    'no-internal-module': { severity: 'off' },

    'no-magic-numbers': { severity: 'off' },

    'no-namespace': { severity: 'error' },

    'no-non-null-assertion': { severity: 'error' },

    'no-parameter-reassignment': { severity: 'error' },

    'no-reference': { severity: 'error' },

    'no-unnecessary-type-assertion': { severity: 'error' },

    'no-var-requires': { severity: 'error' },

    'only-arrow-functions': {
      severity: 'error',
      options: ['allow-declarations'],
    },

    'prefer-for-of': { severity: 'error' },

    'promise-function-async': {
      severity: 'off',
      options: [
        'check-function-declaration',
        'check-function-expression',
        'check-arrow-function',
        'check-method-declaration'
      ],
    },

    'typedef': { severity: 'off' },

    'typedef-whitespace': {
      severity: 'error',
      options: [
        {
          'call-signature': 'nospace',
          'index-signature': 'nospace',
          'parameter': 'nospace',
          'property-declaration': 'nospace',
          'variable-declaration': 'nospace'
        },
        {
          'call-signature': 'onespace',
          'index-signature': 'onespace',
          'parameter': 'onespace',
          'property-declaration': 'onespace',
          'variable-declaration': 'onespace'
        }
      ],
    },

    'unified-signatures': { severity: 'error' },
  },
};
