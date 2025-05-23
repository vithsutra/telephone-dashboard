module.exports = {
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
