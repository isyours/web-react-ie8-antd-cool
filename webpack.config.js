const webpack = require('atool-build/lib/webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const htmlwebpackplugin = require('html-webpack-plugin');

const fs = require('fs');
var path = require('path');
const glob = require('glob');


module.exports = function(webpackConfig) {
  //transform-runtime
  webpackConfig.babel.plugins.push('transform-runtime');
  //antd
  webpackConfig.babel.plugins.push(['antd', {style: 'css',}]);

  // Enable this if you have to support IE8.
  webpackConfig.module.loaders.unshift({
    test: /\.jsx?$/,
    loader: 'es3ify-loader',
  });

  webpackConfig.plugins.unshift(
    new CopyWebpackPlugin([
        {
          from: './favicon.ico'
        },
        {
          from: './static/css',
          to: './css'
        },
        {
            from: './static/js',
            to: './js'
        },
        {
          from: './static/img',
          to: './images'
        },
        {
          from: './static/iconfont',
          to: './iconfont'
        }])
  );


  webpackConfig.plugins.push(
    new htmlwebpackplugin({
      filename:'index.html',
      template: './src/page/index.ejs',
      inject: "body",
      chunks:['index'],
      excludeChunks:['common']
    }),
    new htmlwebpackplugin({
      filename:'company.html',
      template: './src/page/company.ejs',
      inject: "body",
      chunks:['company'],
      excludeChunks:['common']
    }),
    new htmlwebpackplugin({
      filename:'projects.html',
      template: './src/page/projects.ejs',
      inject: "body",
      chunks:['projects'],
      excludeChunks:['common']
    }),
    new htmlwebpackplugin({
      filename:'contact.html',
      template: './src/page/contact.ejs',
      inject: "body",
      chunks:['contact'],
      excludeChunks:['common']
    })
  );

  return webpackConfig;
};

