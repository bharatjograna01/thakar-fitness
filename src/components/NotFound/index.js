import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <div className="nofoundpage text-center" style={{ height: screen.height }}>
                <a href='/'>
                    <div className="col-12  pt-30">
                        <img width='35%' height="45%" src={require('Assets/image/icon/logofinal.png')} alt="logo" />
                    </div>
                    <div className="col-12 pt-25">
                        <span><h1> Oops, Page Not Found </h1></span>
                    </div>
                </a>
            </div>
        );
    }
}

export default index;