import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import css from "@eslint/css"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:primer-react/recommended"
    ],
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      "max-depth": ["error", 3],
      "max-params": ["warn", 4],
      "max-lines-per-function": [
        "error",
        {
          "max": 30,
          "skipBlankLines": true,
          "skipComments": true,
          "IIFEs": true
        }
      ],
      "complexity": ["warn", 10],
      "max-lines": ["warn", { "max": 400, "skipBlankLines": true, "skipComments": true }]
    }
  },
  /**
   * @title eslint css
   * @brief add tailwind css
   * @see https://eslint.org/blog/2025/02/eslint-css-support/
   */
  {
    files: ["**/*.css"],
    plugins: {
      css,
    },
    language: "css/css",
    languageOptions: {
      customSyntax: tailwindSyntax,
    },
    rules: {
      "css/no-empty-blocks": "error",
    },
  },
];

export default eslintConfig;
