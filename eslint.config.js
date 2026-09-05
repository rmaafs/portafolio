import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

/*
 * Migrado desde .eslintrc (ESLint 8) al "flat config" que exige ESLint 9+.
 * Se conservan las mismas reglas que tenía el proyecto; lo único que se añade
 * es el plugin de react-hooks, que antes venía implícito con `react-app` de CRA
 * y que se perdería al quitar react-scripts.
 *
 * Nota: se usa ESLint 9 y no 10 porque eslint-plugin-react (7.37.5, la última)
 * todavía declara soporte solo hasta ESLint ^9.7.
 */
export default [
  {
    ignores: ["build/**", "node_modules/**", "public/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: {
        pragma: "React",
        version: "detect",
      },
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "comma-dangle": 0,
      "react/jsx-uses-vars": 1,
      "react/display-name": 1,
      "no-unused-vars": "error",
      "no-console": ["error", { allow: ["error", "warn"] }],
      "no-unexpected-multiline": "error",
    },
  },
  {
    files: ["**/*.test.{js,jsx}", "src/setupTests.jsx"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.vitest,
      },
    },
  },
];
