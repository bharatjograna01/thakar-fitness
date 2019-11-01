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
            <div>

                {/** bodyFit */}
                <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div class="container row">
                        <a class="navbar-brand" href="/">THAKAR<small>Fitness</small></a>
                        {/* <a class="navbar-brand" href="/"><img width='100%' src={require(`Assets/image/icon/logofav.png`)} alt="home" /></a> */}
                        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="oi oi-menu"></span> Menu
	                    </button> */}
                        <div class="navbar-collapse" id="ftco-nav">
                            <ul class="navbar-nav ml-auto">
                                <li class={path === "/" ? "d-none" : "" + "nav-item"}><Link to="/" class="nav-link">Home</Link></li>
                                <li class={path === "/About" ? "d-none" : "" + "nav-item"}><Link to="/About" class="nav-link">About</Link></li>
                                <li class={path === "/Classes" ? "d-none" : "" + "nav-item"}><Link to="/Classes" class="nav-link">Prices</Link></li>
                                {/* <li class={path === "/Gallery" ? "d-none" : "" + "nav-item"}><Link to="Gallery" class="nav-link">Gallery</Link></li> */}
                                <li class={path === "/Schedule" ? "d-none" : "" + "nav-item"}><Link to="/Schedule" class="nav-link">Schedule</Link></li>
                                <li class={path === "/Trainers" ? "d-none" : "" + "nav-item"}><Link to="/Trainers" class="nav-link">Trainer</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <img width='100%' src={photo} alt="home" />
                <Link to="/">Click Me!</Link>
            </div>
        );
    }
}

export default Header;