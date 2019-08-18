module.exports = {
    env: {
      es6: true,
      browser: true
    },
    extends: [
      "airbnb",
      "prettier",
      "prettier/react",
      "plugin:react/recommended",
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true
    },
      sourceType: 'module',
    },
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "jsx-a11y/anchor-is-valid": [ "error", {
        "components": [ "Link" ],
        "specialLink": [ "hrefLeft", "hrefRight" ],
        "aspects": [ "invalidHref", "preferButton" ]
      }]
    },
    plugins: [
      "prettier", "react"
    ],
    settings: {
      react: {
        pragma: "React",
        version: "detect"
      }
    },
  };
  