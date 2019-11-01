import React, { Component, Fragment } from 'react';
import Appwdgt from '../../components/Classes';

class App extends Component {
    render() {
        return (
            <div>
                <Appwdgt {...this.props} />
            </div>
        );
    }
}

export default App;