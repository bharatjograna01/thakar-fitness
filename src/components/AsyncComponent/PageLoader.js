/**
 * Loader Page
 */
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const PageLoader = () => (
    <div className="d-flex justify-content-center" style={{ marginTop: (screen.height) / 3 }} >
        <CircularProgress />
    </div>
);

export default PageLoader;
