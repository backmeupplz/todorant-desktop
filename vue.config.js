module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: 'Todorant',
      },
      preload: 'src/public/scripts/preloader.ts',
    },
  },
}
