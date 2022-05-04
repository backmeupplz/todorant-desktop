module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: 'Todorant',
        artifactName: 'todorant-${version}-${os}-${arch}.${ext}',
        publish: [
          { provider: 'github', private: false, releaseType: 'release' },
        ],
        mac: {
          hardenedRuntime: true,
          entitlements: 'build/entitlements.mac.plist',
          entitlementsInherit: 'build/entitlements.mac.plist',
        },
        afterSign: 'scripts/notarize.js',
        dmg: {
          sign: false,
        },
        snap: {
          publish: {
            provider: 'snapStore',
            channels: ['stable'],
          },
          grade: 'stable',
        },
        linux: {
          executableName: 'Todorant',
        },
      },
      preload: 'src/public/scripts/preloader.ts',
    },
  },
}
