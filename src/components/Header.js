import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>

                {/** bodyFit */}
                <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div class="container">
                        <a class="navbar-brand" href="/">THAKAR<small>Fitness</small></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="oi oi-menu"></span> Menu
	                    </button>
                        <div class="collapse navbar-collapse" id="ftco-nav">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active"><a href="/" class="nav-link">Home</a></li>
                                <li class="nav-item"><a href="About" class="nav-link">About</a></li>
                                <li class="nav-item"><a href="Classes" class="nav-link">Prices</a></li>
                                <li class="nav-item"><a href="Gallery" class="nav-link">Gallery</a></li>
                                <li class="nav-item"><a href="Schedule" class="nav-link">Schedule</a></li>
                                <li class="nav-item"><a href="Trainers" class="nav-link">Trainer</a></li>
                                {/* <li class="nav-item"><a href="coaches.html" class="nav-link">Updates</a></li> */}
                                {/* <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
                <img width='100%' src={require('Assets/image/bg_home_3.jpg')} alt="home" />

            </div>
        );
    }
}

export default Header;