/**
 * Developed By: Bharat Jograna
 * Created on: 17 Sep 2019
 * Function Componen: Async component to dynamic load component
*/
import React from "react";
import Loadable from "react-loadable";

//BharatRJ page loader
import JbPageLoader from './PageLoader';

// agency dashboard Trading
const AsyncHomeComponent = Loadable({
    loader: () => import("Routes/home"),
    loading: () => <JbPageLoader />
});

// agency dashboard Trading
const AsyncAboutComponent = Loadable({
    loader: () => import("Routes/about"),
    loading: () => <JbPageLoader />
});

// agency dashboard Trading
const AsyncClassesComponent = Loadable({
    loader: () => import("Routes/classes"),
    loading: () => <JbPageLoader />
});

// agency dashboard Trading
const AsyncGalleryComponent = Loadable({
    loader: () => import("Routes/gallery"),
    loading: () => <JbPageLoader />
});

// agency dashboard Trading
const AsyncScheduleComponent = Loadable({
    loader: () => import("Routes/schedule"),
    loading: () => <JbPageLoader />
});

// agency dashboard Trading
const AsyncTrainersComponent = Loadable({
    loader: () => import("Routes/trainers"),
    loading: () => <JbPageLoader />
});

// agency dashboard Trading
const AsyncAboutMeComponent = Loadable({
    loader: () => import("../AboutMe"),
    loading: () => <JbPageLoader />
});

export {
    AsyncHomeComponent,
    AsyncAboutComponent,
    AsyncClassesComponent,
    AsyncGalleryComponent,
    AsyncScheduleComponent,
    AsyncTrainersComponent,
    AsyncAboutMeComponent,
};