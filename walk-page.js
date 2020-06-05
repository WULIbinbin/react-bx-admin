const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginChunks = ['vendor', 'antd']

const templateConfig = {
  inject: true,
  template: './index.html',
  showErrors: true,
  meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
}

const generatePagesConfig = ({ pagesDir }) => {
  const PAGES_DIR = path.resolve(__dirname, pagesDir);
  // 读取多页面目录生成 vue.config.js 中的 pages 配置
  if (!fs.existsSync(PAGES_DIR)) {
    throw Error('pages 配置路径不存在');
  }
  const pagesConfig = [];
  fs.readdirSync(PAGES_DIR).forEach((fileName,index) => {
    const dirIndexJs = PAGES_DIR + `/${fileName}`;
    if (!fs.existsSync(dirIndexJs)) return;
    pagesConfig[index] = new HtmlWebpackPlugin({
      title: `react-bx-admin-${fileName}`,
      filename: `${fileName}.html`,
      chunks: [fileName, ...HtmlWebpackPluginChunks],
      ...templateConfig
    })
  })
  console.log(pagesConfig);
  return {
    pagesConfig,
  }
}

generatePagesConfig({ pagesDir: './src/pages' });

module.exports = {
  generatePagesConfig,
}