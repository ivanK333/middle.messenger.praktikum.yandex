module.exports = {
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    "import/no-extraneous-dependencies": "off",
    '@typescript-eslint/dot-notation': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-implied-eval': 0,
    '@typescript-eslint/no-throw-literal': 0,
    '@typescript-eslint/return-await': 0,
    'max-len': ['error', { code: 125 }],
    'class-methods-use-this': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }]
  },
};
