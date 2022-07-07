const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  // devServer: {
  //   host: '0.0.0.0',
  //   //https:true,
  //   port: 8080,
  //   client: {
  //     webSocketURL: 'ws//0.0.0.0:8080/ws',
  //   },
  //   header: {
  //     'Access-Control-Allow-Origin':'*',
  //   }
  // },
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
  //       target: 'http://192.168.101.8:8080',
  //       pathRewrite: {
  //         '^/':'/bpp'
  //       },
  //       cookiePathRewrite: {
  //         'bpp':'/'
  //       }
  //     }
  //   }
  // },
  // baseUrl:process.env.NODE_ENV === 'production'?'/bpp':'/'
};

