export default {
  logger: {
    quiet: false,
    stats: true
  },
  mini: {},
  h5: {
    devServer: {
      port: 10012,
      proxy: {
        // '/api': {
        //   target: 'https://api.wikimbti.com/',
        //   changeOrigin: true
        // }
      }
    }
  }
}
