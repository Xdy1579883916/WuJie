// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  regexp: false,
  rules: {
    'no-undef': 'off',
    'unicorn/error-message': 'off',
    'eqeqeq': 'off',
    'ts/no-unsafe-function-type': 'off',
    'ts/method-signature-style': 'off',
    'no-cond-assign': 'off',
    'ts/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-debugger': 'off',
    'no-prototype-builtins': 'off',
    'no-self-assign': 'off',
    'prefer-spread': 'off',
    'unused-imports/no-unused-vars': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
  },
})
