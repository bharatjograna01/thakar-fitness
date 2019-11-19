/**
 * Developed By: Bharat Jograna
 * Created on: 03 Nov 2019
 * Class Component: app to route project in aboutMe page
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

class AboutMe extends Component {
    render() {
        const path = this.props.location.pathname;

        return (
            <div>

                <header>

                    {/** Header section is starts from here */}
                    <nav className="navbar navbar-expand-lg mb-5">
                        <div className="container row">
                            <a className="navbar-brand" href="/">THAKAR<small>Fitness</small></a>
                            <div className="navbar-collapse" id="ftco-nav">
                                <ul className="navbar-nav ml-auto">
                                    <li className={path === "/" ? "d-none" : "" + "nav-item"}><Link to="/" className="nav-link">Home</Link></li>
                                    <li className={path === "/About" ? "d-none" : "" + "nav-item"}><Link to="/About" className="nav-link">About</Link></li>
                                    <li className={path === "/Classes" ? "d-none" : "" + "nav-item"}><Link to="/Classes" className="nav-link">Prices</Link></li>
                                    <li className={path === "/Schedule" ? "d-none" : "" + "nav-item"}><Link to="/Schedule" className="nav-link">Schedule</Link></li>
                                    <li className={path === "/Trainers" ? "d-none" : "" + "nav-item"}><Link to="/Trainers" className="nav-link">Trainer</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </header>

                <section>
                    <div class="container">
                        <div className="row mt-5 mb-5">
                            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                <h1>Bharat Jograna</h1>
                                <h1>Junior Software Developer</h1>
                                <a href="http://jbspl.com/" target="_blank"><h1>at Joshi Biz Tech</h1></a>
                                <h1>B.E I.T</h1>
                                <h1>from Gujrat Technological University</h1>
                                <h1>GyanManjari Institute Of Technology</h1>
                                <h1>at Bvn, Guj, India.</h1>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 p-1 m-0">
                                <img
                                    style={{ width: '100%', height: 'auto' }}
                                    src=''
                                    alt="Mission"
                                />
                            </div>
                        </div>

                    </div>
                </section>



                <Footer />


            </div>
        );
    }
}

export default AboutMe;