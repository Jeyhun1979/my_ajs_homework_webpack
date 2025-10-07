import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Настройка для всех JS-файлов
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser, // ← браузерные глобалы
      },
    },
  },
  // Настройка отдельно для webpack.config.js
  {
    files: ["webpack.config.js"],
    languageOptions: {
      globals: {
        ...globals.node, // ← node-глобалы
      },
    },
  },
]);

