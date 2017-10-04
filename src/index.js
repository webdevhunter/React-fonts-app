import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Element from './Element';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Element />, document.getElementById('root'));
registerServiceWorker();
