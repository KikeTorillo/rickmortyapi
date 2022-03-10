const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const DotEnv = require('dotenv-webpack');

const rulesForJavascript =  {  //esta configuracion es para que se pueda procesar nuestros archivos js y sea compatible gracias a babel
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-transform-runtime']
    }
  }
};

const rulesForCss =  {  //esta configuracion es para que podamos obtener los estilos de nuestros archivos css en nuestro proyecto pero no copia los archivos
  test: /\.css$/i,
  use: ["style-loader", "css-loader"],
};

const rulesForImages = { //esta configuracion es para que nuestras imagenes se puedan cargar en nuestro proyecto importandolas como variables
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
};

const rulesForFonts = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
};

rules = [rulesForJavascript,rulesForCss,rulesForImages,rulesForFonts];

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js'
  },
  module: {rules},
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new DotEnv()
  ],

  devServer: { //configuracion para dev server
    open: true, //abrir el navegador
    port: 3000,
  },
  //devtool: 'source-map',
};