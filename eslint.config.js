import js from "@eslint/js";
import json from "@eslint/json"; // 👈 Import the new plugin
import nextPlugin from "@next/eslint-plugin-next";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
    {
        ignores: [
            "**/node_modules/**",
            "**/.next/**",
            "**/dist/**",
            "**/build/**",
            "pnpm-lock.yaml",
            "package-lock.json"
        ],
    },
    js.configs.recommended,
    // --- 📦 New: Package.json / JSON Rules ---
    {
        files: ["**/*.json"],
        plugins: { json },
        language: "json/json",
        rules: {
            "json/no-duplicate-keys": "error",
            "json/no-empty-keys": "error",
        },
    },
    // --- Existing TypeScript/Next Rules ---
    {
        files: ["**/*.{ts,tsx}"],
        plugins: {
            "@typescript-eslint": tsPlugin,
            "@next/next": nextPlugin,
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs["core-web-vitals"].rules,
        },
    },

];