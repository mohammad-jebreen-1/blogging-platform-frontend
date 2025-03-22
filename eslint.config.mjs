import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    ignores: [".next/**"],
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      "@next/next": nextPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      indent: ["error", 2],
      quotes: "off",
      semi: ["error", "always"],
      "no-console": "warn",
      "no-unused-vars": "off",
      "no-empty": "off",
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
  {
    // Configuration for test files
    files: ["tests/**/*.js"], // Apply to test files
    languageOptions: {
      globals: {
        ...globals.mocha, // Mocha globals
        describe: "readonly",
        it: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        expect: "readonly",
      },
    },
  },
];
