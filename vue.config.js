module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.scorebat.com/api',
        pathRewrite: { '^/api': '' }
      },
    },
  },
};
