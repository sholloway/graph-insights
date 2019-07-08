const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/App.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'public/graph-insights')
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/, //Transform both Javascript and React JSX files.
				include:[path.resolve(__dirname, "src")],
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react','@babel/preset-env']
				}
			},
			{
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
		]
	}
};
