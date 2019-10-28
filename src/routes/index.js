/**
 * Developed By: Bharat Jograna
 * Created on: 17 Sep 2019
 * Function Component: Dasboard Routes to route project in below routes
*/
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import appwdgt from '../components/About'

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

const RouterBJ = ({ match }) => (
    <div>
        <Switch>
            {/* <Redirect from={`${match.url}/`} to={`${match.url}/Home`} /> */}
            {/* <Route path={`${match.url}/`} component={AsyncHomeComponent} /> */}
            <Route path={`${match.url}/Home`} component={AsyncHomeComponent} />
            <Route path={`${match.url}/About`} component={AsyncAboutComponent} />
            <Route path={`${match.url}/Classes`} component={AsyncClassesComponent} />
            {/* <Route path={`${match.url}/Contact`} component={AsyncContactComponent} /> */}
            <Route path={`${match.url}/Gallery`} component={AsyncGalleryComponent} />
            <Route path={`${match.url}/Schedule`} component={AsyncScheduleComponent} />
            <Route path={`${match.url}/Trainers`} component={AsyncTrainersComponent} />
            {/* <Route path={`${match.url}/Updates`} component={AsyncUpdatesComponent} /> */}

            <Route component={appwdgt} />
        </Switch>
    </div>
);

export default RouterBJ;
