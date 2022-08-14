export default {
    env: {
        es6: true,
    },

    extends: [
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
    ],

    plugins: ['unused-imports'],

    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
    },

    rules: {
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
    },
}
