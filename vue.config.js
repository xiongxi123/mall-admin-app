const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭eslint校验
});
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  // devServer: {
  //   proxy: {
  //     '/': {
  //       ws: false, //proxy websockets
  //       target: 'http://192.168.11.172:8090',
  //       pathRewrite: {
  //         '^/':'/bpp'
  //       },
  //       cookiePathRewrite: {
  //         'bpp':'/'
  //       }
    //   }
    // }
  // },
  // baseUrl:process.env.NODE_ENV === 'production'?'/bpp':'/'
};

