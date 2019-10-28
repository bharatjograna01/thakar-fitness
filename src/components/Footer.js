import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                Copyright © {new Date().getFullYear()} <b>Bharat Jograna</b> All Rights Reserved.
            </div>
        );
    }
}

export default Footer;