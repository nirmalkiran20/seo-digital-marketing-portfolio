// FILE: .eslintrc.js
module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Text quotes inside JSX
    'react/no-unescaped-entities': 'off',

    // Allow plain <img> temporarily (instead of next/image)
    '@next/next/no-img-element': 'off',

    // Common TypeScript hygiene: disable blocking rules for deployment
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',

    // Style relaxations
    'prefer-const': 'off',
  },
};
