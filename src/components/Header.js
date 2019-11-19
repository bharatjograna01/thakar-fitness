/**
 * Developed By: Bharat Jograna
 * Created on: 03 Nov 2019
 * Class Component: Header of project
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    //get image icons...
    getImage(path) {
        try {
            return require(`Assets/image/first/${path}.jpg`)
        } catch (e) {
            return require(`Assets/image/first/home.jpg`);
        }
    }

    render() {
        const path = this.props.location.pathname;
        const photo = this.getImage(path.replace('/', '').toLowerCase())

        return (
            <header>

                {/** Header section is starts from here */}
                <nav className="navbar navbar-expand-lg ftco-navbar-light">
                    <div className="container row">
                        <a className="navbar-brand" href="/">THAKAR<small>Fitness</small></a>
                        <div className="navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto">
                                <li className={path === "/" ? "d-none" : "" + "nav-item"}><Link to="/" className="nav-link">Home</Link></li>
                                <li className={path === "/About" ? "d-none" : "" + "nav-item"}><Link to="/About" className="nav-link">About</Link></li>
                                <li className={path === "/Classes" ? "d-none" : "" + "nav-item"}><Link to="/Classes" className="nav-link">Prices</Link></li>
                                {/* <li className={path === "/Gallery" ? "d-none" : "" + "nav-item"}><Link to="Gallery" className="nav-link">Gallery</Link></li> */}
                                <li className={path === "/Schedule" ? "d-none" : "" + "nav-item"}><Link to="/Schedule" className="nav-link">Schedule</Link></li>
                                <li className={path === "/Trainers" ? "d-none" : "" + "nav-item"}><Link to="/Trainers" className="nav-link">Trainer</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <img width='100%' src={photo} alt="home" />

            </header>
        );
    }
}

export default Header;
