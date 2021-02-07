module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: 'Todorant',
        artifactName: 'todorant-${version}-${os}-${arch}.${ext}',
        publish: ['github'],
        mac: {
          hardenedRuntime: true,
          entitlements: 'build/entitlements.mac.plist',
          entitlementsInherit: 'build/entitlements.mac.plist',
        },
        afterSign: 'scripts/notarize.js',
      },
      preload: 'src/public/scripts/preloader.ts',
    },
  },
}
