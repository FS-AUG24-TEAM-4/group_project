import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginPrettier from "eslint-plugin-prettier";
import airbnbTypescript from "eslint-config-airbnb-typescript";

export default [
  { 
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      "@typescript-eslint": tseslint,
      "react": pluginReact,
      "react-hooks": pluginReactHooks,
      "prettier": pluginPrettier
    },
    languageOptions: {
      parser,
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        project: "./tsconfig.json"
      }
    }
  },

  {
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginPrettier.configs.recommended.rules,
      ...airbnbTypescript.rules,

      "semi": "off",
      "@typescript-eslint/semi": ["error", "always"],
      "prefer-const": "error",
      "curly": ["error", "all"],
      "max-len": ["error", { ignoreTemplateLiterals: true, ignoreComments: true }],
      "no-redeclare": ["error", { builtinGlobals: true }],
      "no-console": "error",
      "operator-linebreak": "off",
      "brace-style": ["error", "1tbs"],
      "arrow-body-style": "off",
      "arrow-parens": "off",
      "no-param-reassign": ["error", { props: true }],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
        { blankLine: "always", prev: "directive", next: "*" },
        { blankLine: "always", prev: "block-like", next: "*" }
      ],
      "implicit-arrow-linebreak": "off",

      // React
      "react/prop-types": "off",
      "react/require-default-props": "off",
      "import/prefer-default-export": "off",
      "standard/no-callback-literal": "off",
      "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
      "react/destructuring-assignment": "off",
      "react/jsx-props-no-spreading": "off",
      "react/state-in-constructor": ["error", "never"],
      "react-hooks/rules-of-hooks": "error",
      "jsx-a11y/label-has-associated-control": [
        "error",
        { assert: "either" }
      ],
      "jsx-a11y/label-has-for": [
        "error",
        {
          components: ["Label"],
          required: { some: ["id", "nesting"] },
          allowChildren: true
        }
      ],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",

      // TypeScript
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/indent": ["error", 2],
      "@typescript-eslint/ban-types": [
        "error",
        {
          extendDefaults: true,
          types: {
            "{}": false
          }
        }
      ]
    }
  },

  { 
    ignores: ["dist", ".eslintrc.cjs", "vite.config.ts", "src/vite-env.d.ts", "cypress"]
  },

  {
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];