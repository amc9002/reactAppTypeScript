import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './Redux/redux-store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = (): void => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App store={store} />
            </Provider>
        </React.StrictMode>
    );
}

rerenderEntireTree();


store.subscribe((): void => {
    rerenderEntireTree();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
