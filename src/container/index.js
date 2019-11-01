/**
 * Developed By: Bharat Jograna
 * Created on: 17 Sep 2019
 * Class Component: app to route project in below routes
 */
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncHomeComponent,
    AsyncAboutComponent,
    AsyncClassesComponent,
    AsyncGalleryComponent,
    AsyncScheduleComponent,
    AsyncTrainersComponent,
    AsyncAboutMeComponent,
} from 'Components/AsyncComponent';

class index extends Component {
    render() {

        return (
            <Fragment>
                <Route exact path='/' component={AsyncHomeComponent} />
                <Route exact path='/About' component={AsyncAboutComponent} />
                <Route exact path='/Classes' component={AsyncClassesComponent} />
                <Route exact path='/Gallery' component={AsyncGalleryComponent} />
                <Route exact path='/Schedule' component={AsyncScheduleComponent} />
                <Route exact path='/Trainers' component={AsyncTrainersComponent} />
                <Route exact path='/AboutMe' component={AsyncAboutMeComponent} />
            </Fragment>
        );
    }
}

export default index;