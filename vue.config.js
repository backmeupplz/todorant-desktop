module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: 'Todorant',
        artifactName: 'todorant-${version}-${os}-${arch}.${ext}',
      },
      preload: 'src/public/scripts/preloader.ts',
    },
  },
}
