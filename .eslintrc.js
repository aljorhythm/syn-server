const packageJson = require("./package.json");
const devDependencies = Object.keys(packageJson.devDependencies || {});

module.exports = {
  root: true,
  env: {
    browser: false,
    es6: true,
    node: true,
    mocha: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:node/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:import/recommended",
    "prettier",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  rules: {
    "node/no-missing-import": "off",
    "import/no-unresolved": "error",
    "node/no-unpublished-import": [
      "error",
      {
        allowModules: devDependencies,
      },
    ],
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
  },
};
