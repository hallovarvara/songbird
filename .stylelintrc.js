module.exports = {
  extends: [
    'stylelint-prettier/recommended',
    'stylelint-config-htmlacademy',
  ],
  plugins: ['stylelint-prettier', 'stylelint-scss'],
  rules: {
    'string-quotes': 'single',
    'at-rule-no-unknown': {
      ignoreAtRules: ['if', 'else'],
    },
  },
};
