import dotenv from 'dotenv'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { fileURLToPath } from 'url'
import webpack from 'webpack'
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const envConfig = dotenv.config().parsed || {}

const argv = process.argv.slice(2)
const mode = argv.indexOf('--mode') > -1 ? argv[argv.indexOf('--mode') + 1] : 'development'

const regexPage = /src_app_[A-Za-z]+_index_ts/

// function generateFileName({ chunk }) {
//   if (chunk.name && chunk.name.endsWith('.worker')) {
//     return '[name].[contenthash].worker.js'
//   }
//   // const aliased = regexPage.test(chunk.id) ? 'pages/' : ''
//   // return `chunks/${aliased}[name]-[contenthash].js`
//   return '[name]-[contenthash].js'
// }

export function generateAssetName() {
  // return 'assets/[name]-[hash][ext]'
  return '[name]-[hash][ext]'
}

/** @type {import('webpack').Configuration}*/
export default {
  mode,
  entry: './src/main.tsx',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[contenthash].js',
    chunkFilename: '[name]-[contenthash].js',
    assetModuleFilename: generateAssetName,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.app.json'),
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, 'tsconfig.app.json'),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.worker\.js$/,
        use: [
          {
            loader: 'worker-loader',
            options: {
              filename: '[name].[contenthash].worker.js',
              publicPath: '/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'View Exports SVG',
      favicon: './favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
      chunkFilename: '[id]-[contenthash].css',
    }),
    new webpack.DefinePlugin({
      'import.meta.env': JSON.stringify({
        ...envConfig,
        MODE: mode,
        DEV: mode === 'development',
        PROD: mode === 'production',
        BASE_URL: process.env.BASE_URL || '/',
        SSR: false,
      }),
    }),
    new WebpackManifestPlugin({
      generate: (_, files) => {
        const manifest = {
          'index.html': { css: [], assets: [] },
        }
        for (const file of files) {
          if (file.name === 'index.html') {
            continue
          }

          if (file.isInitial) {
            if (file.name === 'main.js') {
              manifest['index.html'].file = file.path
            } else if (file.name.endsWith('.css')) {
              manifest['index.html'].css.push(file.path)
            } else {
              manifest['index.html'].assets.push(file.path)
            }
          } else {
            manifest[file.name] = {
              file: file.path,
            }
          }
        }
        return manifest
      },
    }),
  ],
  devServer: {
    compress: true,
    port: 5173,
  },
}
