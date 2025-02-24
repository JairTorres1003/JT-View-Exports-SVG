import dotenv from 'dotenv'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import TerserPlugin from 'terser-webpack-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { fileURLToPath } from 'url'
import webpack from 'webpack'
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const envConfig = dotenv.config().parsed || {}

const argv = process.argv.slice(2)
const mode = argv.indexOf('--mode') > -1 ? argv[argv.indexOf('--mode') + 1] : 'development'

/** @type {import('webpack').Configuration}*/
export default {
  mode,
  entry: './src/main.tsx',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[contenthash].js',
    chunkFilename: 'chunks/[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
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
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'esnext',
          minify: false,
        },
      },
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: {
          target: 'esnext',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{ loader: 'file-loader' }],
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
    new webpack.DefinePlugin({
      rootDirectory: JSON.stringify(__dirname),
    }),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new WebpackManifestPlugin({
      generate: (_, files) => {
        const manifest = {
          'index.html': { css: [], assets: [], file: '' },
          chunks: [],
          assets: [],
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
          } else {
            const fileName = name.split('/').pop()

            if (name.includes('chunks/')) {
              manifest.chunks.push({ file: cleanPath, name: fileName })
            } else if (name.includes('assets/')) {
              manifest.assets.push({ file: cleanPath, name: fileName })
            } else {
              manifest[name] = { file: cleanPath, name: fileName }
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
