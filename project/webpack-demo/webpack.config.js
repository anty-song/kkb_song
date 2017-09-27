var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
  	main: './src/script/main.js',
  	a: './src/script/a.js',
  	b: './src/script/b.js',
  	c: './src/script/c.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].js',
    publicPath: 'http://cdn.com'
  },
  plugins: [
  	new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'a.html',
      inject: 'body',
      title: 'this is a.html',
      chunks: ['main','a']
    }),
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'b.html',
      inject: 'body',
      title: 'this is b.html',
      chunks: ['b']
    }),
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'c.html',
      inject: 'body',
      title: 'this is c.html',
      chunks: ['c']
    }),
  ]
}
