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
}
