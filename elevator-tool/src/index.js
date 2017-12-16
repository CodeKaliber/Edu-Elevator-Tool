import React from 'react';
import ReactDOM from 'react-dom';
// Adding Redux for future scalability
// import { Provider } from 'react-redux';

import store from './components/store/store';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    /*
    Redux will act as support for user, information can be stored
    into a database or discarded after calulations have been complete
    */
    // <Provider store={ store } >
        <App />
    // </Provider>
    , document.getElementById('root'));
registerServiceWorker();
