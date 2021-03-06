module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
  syntax: 'scss',
  rules: {
    'block-no-empty': null,
    'at-rule-no-unknown': null,
    'color-hex-case': 'lower',
    'function-name-case': null,
    'declaration-colon-newline-after': 'always-multi-line',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-class-no-unknown': null,
    'value-no-vendor-prefix': null,
    'value-keyword-case': null,
    'property-no-vendor-prefix': null,
    'no-descending-specificity': null,
    'rule-empty-line-before': null,
    'selector-max-empty-lines': null,
    'length-zero-no-unit': null,
    'at-rule-empty-line-before': null,
    'color-hex-length': null,
    'no-eol-whitespace': null,
    indentation: null,
    'block-opening-brace-space-before': null,
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-descendant-combinator-no-non-space': null,
    'declaration-colon-newline-after': null,
    'function-parentheses-newline-inside': null,
  },
  ignoreFiles: ['./packages/client/public/static/scss/utils/sprites/**/*.scss'],
}
