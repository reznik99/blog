import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals'
import "highlight.js/styles/github.css"
import './index.css'
import { Home, Blog } from './Pages'
import { Nav } from './Components'
import { Provider } from 'react-redux'
import { store } from './Store/Store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Nav />
                <Switch>
                    <Route path="/blog/:blog" >
                        <Blog />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
