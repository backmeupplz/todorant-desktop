module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "Todorant"
      }
    }
  }
}
