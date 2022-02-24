module.exports = {
   extends: [
      'airbnb',
      'airbnb/hooks',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended'
   ],
   parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
         jsx: true
      }
   },
   rules: {
      'react/prop-types': 0,
      'react/jsx-props-no-spreading': 'off',
      'react/no-array-index-key': 'off',
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'max-len': ['error', { code: 400 }],
      'no-underscore-dangle': 'off',
      'consistent-return': 'off',
      'import/prefer-default-export': 'off',
      'arrow-body-style': 'off',
      camelcase: 'off',
      'prettier/prettier': ['error', {}, { usePrettierrc: true }]
   },
   parser: '@babel/eslint-parser',
   settings: {
      'import/resolver': {
         alias: {
            map: [['@', './']],
            extensions: ['.js', '.jsx']
         }
      }
   }
};
