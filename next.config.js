// next.config.js
const withCSS = require('@zeit/next-css')

// fix: prevents error when .css files are required by node
// https://github.com/zeit/next.js/blob/canary/examples/with-ant-design/next.config.js
if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => { }
}

module.exports = withCSS()