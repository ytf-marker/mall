module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    configureWebpack:{
      resolve:{
        alias:{
          "assets":'@/assets',
          "common":'@/common',
          "components":'@/components',
          "network":'@/network',
          "store":'@/store',
          "views":'@/views',
        }
      }
    }
  }
