module.exports = {
  rules: {
    'await-promise': { severity: 'error' },

    'ban-comma-operator': { severity: 'error' },

    ban: {
      severity: 'error',
      options: ['eval'],
    },

    'curly': { severity: 'error' },

    'forin': { severity: 'error' },

    'function-constructor': { severity: 'error' },

    'import-blacklist': { severity: 'off' },

    'label-position': { severity: 'error' },

    'no-arg': { severity: 'error' },

    'no-bitwise': { severity: 'error' },

    'no-conditional-assignment': { severity: 'error' },

    'no-console': { severity: 'warning' },

    'no-construct': { severity: 'error' },

    'no-debugger': { severity: 'error' },

    'no-duplicate-super': { severity: 'error' },

    'no-duplicate-switch-case': { severity: 'error' },

    'no-duplicate-variable': {
      severity: 'error',
      options: ['check-parameters'],
    },

    'no-empty': { severity: 'error' },

    'no-dynamic-delete': { severity: 'error' },

    'no-floating-promises': { severity: 'off' },

    'no-for-in-array': { severity: 'error' },

    'no-implicit-dependencies': {
      severity: 'error',
      options: ['dev'],
    },

    'no-inferred-empty-object-type': { severity: 'error' },

    'no-invalid-template-strings': { severity: 'error' },

    'no-invalid-this': {
      severity: 'error',
      options: ['check-function-in-method'],
    },

    'no-misused-new': { severity: 'error' },

    'no-null-keyword': { severity: 'off' },

    'no-object-literal-type-assertion': { severity: 'error' },

    'no-return-await': { severity: 'error' },

    'no-shadowed-variable': { severity: 'error' },

    'no-sparse-arrays': { severity: 'error' },

    'no-string-literal': { severity: 'error' },

    'no-string-throw': { severity: 'error' },

    'no-submodule-imports': { severity: 'off' },

    'no-switch-case-fall-through': { severity: 'error' },

    'no-this-assignment': {
      severity: 'error',
      options: { 'allow-destructuring': false },
    },

    'no-unbound-method': { severity: 'error' },

    'no-unnecessary-class': { severity: 'error' },

    'no-unsafe-any': { severity: 'off' },

    'no-unsafe-finally': { severity: 'error' },

    'no-unused-expression': { severity: 'error' },

    'no-use-before-declare': { severity: 'error' },

    'no-var-keyword': { severity: 'error' },

    'no-void-expression': {
      severity: 'off',
      options: ['ignore-arrow-function-shorthand']
    },

    'prefer-conditional-expression': { severity: 'error' },

    'prefer-object-spread': { severity: 'error' },

    'radix': { severity: 'error' },

    'restrict-plus-operands': { severity: 'error' },

    'strict-boolean-expressions': {
      severity: 'off',
      options: [
        'allow-undefined-union',
        'allow-null-union'
      ]
    },

    'strict-type-predicates': { severity: 'error' },

    'switch-default': { severity: 'error' },

    'unnecessary-constructor': { severity: 'error' },

    'use-default-type-parameter': { severity: 'error' },

    'use-isnan': { severity: 'error' },
  },
};