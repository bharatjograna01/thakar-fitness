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
                <Route path='/' exact component={AsyncHomeComponent} />
                <Route path='/About' component={AsyncAboutComponent} />
                <Route path='/Classes' component={AsyncClassesComponent} />
                <Route path='/Gallery' component={AsyncGalleryComponent} />
                <Route path='/Schedule' component={AsyncScheduleComponent} />
                <Route path='/Trainers' component={AsyncTrainersComponent} />
                <Route path='/AboutMe' component={AsyncAboutMeComponent} />
            </Fragment>
        );
    }
}

export default index;