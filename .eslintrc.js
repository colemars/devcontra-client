module.exports = {
  env: {
    es6: true,
    browser: true
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "prettier",
  ],
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
    "react/jsx-wrap-multilines": ["error", {"declaration": false, "assignment": false}],
  },
  plugins: [
    "prettier", "react"
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    },
    "import/resolver": "webpack"
  },
  parser: "babel-eslint"
};
