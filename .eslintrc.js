module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'vue/multi-word-component-names': 'off',
    indent: [2, 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    'vue/component-api-style': ['error', ['script-setup', 'composition']],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
      },
    ],
    'vue/next-tick-style': ['error', 'promise'],
    'vue/no-empty-component-block': 'error',
    'vue/no-expose-after-await': 'error',
    'vue/no-invalid-model-keys': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-undef-properties': [
      'error',
      {
        ignores: ['/^\\$/'],
      },
    ],
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props'],
        deepData: false,
        ignorePublicMembers: false,
      },
    ],
    'vue/no-unused-refs': 'error',
    'vue/no-use-computed-property-like-method': 'error',
    'vue/no-useless-v-bind': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      },
    ],
    'vue/no-v-text': 'off',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/v-for-delimiter-style': ['error', 'in'],
    'vue/v-on-function-call': ['error', 'always'],
    'vue/array-bracket-newline': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'computed-property-spacing': ['error', 'never'],
  },
}
