import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

const eslintConfig = [
	...tseslint.configs.recommended,
	reactHooks.configs.flat.recommended,
	{
		ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
	},
];

export default eslintConfig;
