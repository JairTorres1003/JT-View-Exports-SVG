import { merge } from 'webpack-merge'
import config from './webpack.config.js'

export default merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
})
