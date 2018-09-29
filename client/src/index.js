import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider as ReduxProvider } from 'react-redux' 
import thunk from 'redux-thunk'
import allReducers from './reducers/root'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const config = () => {
    return createStore(
        allReducers,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    )
}

const store = config()

ReactDOM.render(
<ReduxProvider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</ReduxProvider>, document.getElementById('root'));
registerServiceWorker();
