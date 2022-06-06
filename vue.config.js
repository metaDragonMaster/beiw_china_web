const path = require('path')
function resolveRealPath (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '',
  productionSourceMap: false,
  lintOnSave:false,
  outputDir: 'beiw_china_dist', // 输出文件目录
  devServer: {
   port: 4950,
  },
  css: {
    loaderOptions: {

		sass :{
			prependData: `@import "@/styles/variables.scss";`,
		}
    }
  },
  chainWebpack: config => {

  },

}
