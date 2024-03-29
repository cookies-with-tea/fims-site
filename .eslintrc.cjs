module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
  plugins: ['react-refresh', '@typescript-eslint', 'react-hooks', 'react'],
  globals: {
    process: true,
  },
  rules: {
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-newline": [2, { "prevent": false  }],
    "react/jsx-max-props-per-line": [
      2,
      { "maximum": 1, "when": "multiline" }
    ],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-indent": [2, 2, {"checkAttributes": true, "indentLogicalExpressions": true}],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-sort-props": [2, {
      "callbacksLast": true,
      "shorthandFirst": true,
      "shorthandLast": true,
      "multiline": "ignore",
      "ignoreCase": true,
      "noSortAlphabetically": true,
      "reservedFirst": false,
      "locale": "auto"
    }],
    "react/jsx-closing-bracket-location": [
      2,
      "tag-aligned"
    ],
    "import/no-anonymous-default-export": 0,
    "react/no-unknown-property": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "semi": [
      "error", "never"
    ],
    "quotes": [
      "error", "single"
    ],
    "object-curly-spacing": [
      "error", "always", { "objectsInObjects": true }],
    "react/jsx-no-target-blank": "off",
    "max-len": [
      "error",
      {
        "code": 120,
        "tabWidth": 2,
        "ignoreComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "@typescript-eslint/no-var-requires": 1,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
