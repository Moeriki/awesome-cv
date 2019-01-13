module.exports = {
  env: { node: true },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    'prettier',
    'prettier/vue',
  ],
  parserOptions: { parser: 'babel-eslint' },
  root: true,
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
  },
  overrides: [
    {
      files: ['config/**', 'src/design/**', '*.spec.js', '*.stories.js'],
      rules: {
        'import/no-extraneous-dependencies': [
          'warn',
          {
            devDependencies: true,
          },
        ],
      },
    },
  ],
};
