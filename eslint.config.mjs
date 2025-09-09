import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */

import typescriptEslintEslintPlugin from '@typescript-eslint/eslint-plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: ['**/.eslintrc.js'],
	},
	...compat.extends('plugin:@typescript-eslint/recommended', 'prettier'),
	{
		plugins: {
			'@typescript-eslint': typescriptEslintEslintPlugin,
		},

		languageOptions: {
			globals: {
				...globals.node,
				...globals.browser,
			},
		},
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		rules: {
			'@typescript-eslint/interface-name-prefix': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'no-async-promise-executor': 'off',
		},
	},
];
