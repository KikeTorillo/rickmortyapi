const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: 'assets/images/[hash][ext][query]'
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/, //ignora los modulos de la carpeta
        use: {
          loader: "babel-loader" //loader de baber para que nuetro proyecto sea compatible con navegadores anteriores
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"], //loader para poder cargar css a nuestro proyecto
      },
      {
        test: /\.png/, //Regla para aceptar imagenes png
        type: 'asset/resource', //loader para imagenes que se guardan con un hash
      },
      {
        test: /\.(woff|woff2)$/,
        type: "asset/resource",
       /*  use:{
          loader: 'url-loader', //mombre del loader
          options: {
            limit: 10000, //especifica el tamaño maximo de un archivo
            mimetype: "application/font-woff", // Especifica el tipo MIME con el que se alineará el archivo. 
            // Los MIME Types (Multipurpose Internet Mail Extensions)
            // son la manera standard de mandar contenido a través de la red.
            name: "[name].[ext]",
            // EL NOMBRE INICIAL DEL ARCHIVO + SU EXTENSIÓN
            // PUEDES AGREGARLE [name]hola.[ext] y el output del archivo seria 
            // ubuntu-regularhola.woff
            outputPath: "./assets/fonts/",
             // EL DIRECTORIO DE SALIDA (SIN COMPLICACIONES)
            publicPath: "./assets/fonts/",
            // EL DIRECTORIO PUBLICO (SIN COMPLICACIONES)
            esModule: false,
          }
        }, */
        generator: {
          filename: "assets/fonts/[hash][ext]",
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ //plugin que permite generar el html para nuestro build ya que por defecto webpack solo copia javascript
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin( //plugin que permite generar el archivo css en nuestro proyecto para el build
      //{
      //filename: "styles.css", //esta opcion nos permite cambiarle el nombre a nuestro archivo final
      //}
    ),
    new Dotenv(), //plugin que permite la configuracion de variables de entorno
   //new CopyWebpackPlugin({
     // patterns: [{ from: "./src/assets", to: "./assets" }], //plugin que sirve para copiar archivos al biuld sin importar que extension son
    //}), 
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ]
  }
};
