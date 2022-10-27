let mix = require('laravel-mix')

mix
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .vue({ version: 2 })
  .sass('resources/sass/field.scss', 'css')
  .webpackConfig({
    externals: {
      Vue: 'vue',
    },
  })
  .babelConfig({
        plugins: [
          [
            'component',
            {
              libraryName: 'element-ui',
              styleLibraryName: 'theme-chalk'
            }
          ]
        ]
  })
