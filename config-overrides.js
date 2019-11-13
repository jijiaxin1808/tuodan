const { override, fixBabelImports, addLessLoader } = require('customize-cra')

// close source-map
// process.env.GENERATE_SOURCEMAP = 'false'

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addLessLoader({
    javascriptEnabled: true,
    localIdentName: '[local]--[hash:base64:5]'
  })
)
