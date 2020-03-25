import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from  'react-router-dom';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import { Items } from './redux/userReducer';
import Cartreducer from './redux/Cartreducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Main from './components/connect';



const rootReducer = combineReducers({
    items:Items,
    cartItems:Cartreducer
});

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))




ReactDOM.render(
    <Provider store={store}>
   
    <BrowserRouter>
    <Main/>
    </BrowserRouter>

    </Provider>
    , document.getElementById('root'));


