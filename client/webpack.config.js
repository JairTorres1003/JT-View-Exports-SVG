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

function generateFileName({ chunk }) {
  const aliased = regexPage.test(chunk.id) ? 'pages/' : ''
  return `chunks/${aliased}[contenthash].js`
}

/** @type {import('webpack').Configuration}*/
export default {
  mode,
  entry: './src/main.tsx',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[contenthash].js',
    chunkFilename: generateFileName,
    assetModuleFilename: 'assets/[hash][ext]',
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
              filename: 'chunks/workers/[contenthash].worker.js',
              chunkFilename: 'chunks/workers/[contenthash].worker.js',
              inline: 'fallback',
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
      filename: '[contenthash].css',
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
          assets: [],
          'index.html': { css: [], assets: [] },
        }

        for (const { name, path, isInitial } of files) {
          if (name === 'index.html') continue

          const cleanPath = path.replace(/^auto\//, '')

          if (isInitial) {
            if (name === 'main.js') {
              manifest['index.html'].file = cleanPath
            } else if (name.endsWith('.css')) {
              manifest['index.html'].css.push(cleanPath)
            } else {
              manifest['index.html'].assets.push(cleanPath)
            }
          } else if (name.startsWith('assets/')) {
            manifest.assets.push(cleanPath)
          } else {
            manifest[name] = { file: cleanPath }
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
