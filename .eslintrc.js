module.exports = {
  extends: ['react-app'],
  parserOptions: {
    babelOptions: {
      presets: [
        ['babel-preset-react-app', false],
        'babel-preset-react-app/prod'
      ]
    },
  },

  rules: {

  }
}