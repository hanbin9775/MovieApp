const path = require('path'); // 노드에서 경로 쉽게 조작하게 도와주는 것

module.exports = {

  name : 'RSP',
  mode: 'development', // 실서비스 : production
  devtool : 'eval', // 빠르게
  

  //entry에 확장자 넣어주기 귀찮으면 알아서 확장자 달아줌
  resolve:{
    extensions: ['.js', '.jsx']
  },

  entry: ['babel-polyfill', "./client"],


  //entry에서 읽어서 module을 적용해서 output을 낸다.
  module: {
    rules: [{
      test: /\.jsx?/, //js 파일과 jsx파일에서 이 룰(바벨)을 적용한다. 최신문법도 적용되게끔.
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties', 'react-hot-loader/babel'],
      },
    },
    {
      test: /\.css$/,
      use:['style-loader', 'css-loader']
    }
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'), // 경로를 알아서 합쳐줌. 현재 폴더 안에 dist 폴더 자동으로 만들어줌
    filename : 'app.js', // 으로 만들어 준다.
    publicPath : '/dist/',
  }, // 출력

};
