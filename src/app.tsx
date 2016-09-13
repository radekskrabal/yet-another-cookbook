import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import router from './router';
import store from './store';

const rootEl = document.getElementById('react-app-container');

ReactDOM.render((
    <Provider store={store}>
        {router}
    </Provider>
), rootEl);