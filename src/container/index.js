/**
 * Developed By: Bharat Jograna
 * Created on: 17 Sep 2019
 * Class Component: app to route project in below routes
 */
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Appwdgt from 'Routes';

// async components
import {
    AsyncHomeComponent,
    AsyncAboutComponent,
    // AsyncContactComponent,
    AsyncClassesComponent,
    AsyncGalleryComponent,
    AsyncScheduleComponent,
    AsyncTrainersComponent,
    // AsyncUpdatesComponent,
} from 'Components/AsyncComponent';

class index extends Component {
    render() {

        return (
            <Fragment>
                {/* <Route path='/' component={Appwdgt} /> */}
                {/* <Route path='/' component={AsyncAboutComponent} /> */}
                {/* <Redirect from='/' to='/Home' /> */}
                <Route exact path='/' component={AsyncHomeComponent} />
                <Route path='/About' component={AsyncAboutComponent} />
                <Route path='/Classes' component={AsyncClassesComponent} />
                {/* <Route path='/Contact' component={AsyncContactComponent} /> */}
                <Route path='/Gallery' component={AsyncGalleryComponent} />
                <Route path='/Schedule' component={AsyncScheduleComponent} />
                <Route path='/Trainers' component={AsyncTrainersComponent} />
                {/* <Route path='/Updates' component={AsyncUpdatesComponent} /> */}
            </Fragment>
        );
    }
}

export default index;