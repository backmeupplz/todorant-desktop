module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: 'Todorant',
        artifactName: 'todorant-${version}-${os}-${arch}.${ext}',
        publish: [{ provider: 'github', private: false }],
        mac: {
          hardenedRuntime: true,
          entitlements: 'build/entitlements.mac.plist',
          entitlementsInherit: 'build/entitlements.mac.plist',
        },
        afterSign: 'scripts/notarize.js',
        dmg: {
          sign: false,
        },
      },
      preload: 'src/public/scripts/preloader.ts',
    },
  },
}
