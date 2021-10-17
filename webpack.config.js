const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { webpack } = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', 
  //실서비스: production
  //mode: 'production',
  devtool: 'eval', //hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    //app: ['./index']
    app: ['./client']
    //app: ['./client', './index']  
  }, //입력

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR', 'last 2 chrome versions'],
            },
            debug: true,
          }],          
          '@babel/preset-react',
        ],
        //presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel',
        ]
      },
    }],
  },
  
  output: {
    //path: path.resolve(__dirname, 'dist'),
    path: path.join(__dirname, 'dist'), //c:\\~ 전체 폴더를 자동으로   
    filename: 'app.js',
    //publicPath: '/dist/',
  }, //출력
  
  devServer: {
    port: 9000,
    //publicPath: '/dist/',
    hot: true,
  },
  
  plugins: [
    //new webpack.LoaderOptionsPlugin({ debug: true }),  //오류
    new RefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: 'index.html',
    }),
  ],

};