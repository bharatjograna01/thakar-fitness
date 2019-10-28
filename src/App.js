/**
 * Developed By: Bharat Jograna
 * Created on: 17 Sep 2019
 * Function Component: app to route project
*/
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppWdgt from './container';
import 'Assets/scss';

const App = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path='/' component={AppWdgt} />
                </Switch>
            </Router>
            <Router>
                <Switch>
                    <Route path="/Bpanel" component={AppWdgt} />
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;
