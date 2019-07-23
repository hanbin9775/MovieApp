//남이 만든 스크립트도 가져올 수 있다.
import React from 'react'; // == import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import MovieApp from './MovieApp';


const Hot = hot(MovieApp);

ReactDom.render(<Hot />, document.querySelector('#root'));