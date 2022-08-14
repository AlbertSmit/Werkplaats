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

    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
    },
}
