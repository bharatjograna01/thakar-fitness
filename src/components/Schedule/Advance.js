/**
 * Developed By: Bharat Jograna
 * Created on: 03 Nov 2019
 * Class Component: Advance section of schedule page
 */
import React, { Component } from 'react';
import { Collapse, Row, Col, CardBody, Card, Container } from 'reactstrap';

class Advance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        return (
            <div>

                {/** Advance section of schedule page is starts from here */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-15">
                    <Card className="mb-10">
                        <a href="javascript:void(0)" onClick={this.toggle}>
                            <Row className="m-0">
                                <Col lg={1} md={1} sm={1} xs={2} className="text-dark">
                                    {<i className="zmdi zmdi-menu zmdi-hc-3x ml-10 "></i>}
                                </Col>
                                <Col lg={11} md={11} sm={11} xs={10} className="text-dark">
                                    <h1>ADVANCE</h1>
                                </Col>
                            </Row>
                        </a>
                    </Card>
                    <Collapse
                        isOpen={this.state.collapse}
                    >
                        <Card>
                            <CardBody className="row container ml-30">
                                <div className="col-6">
                                    <h3>BACK</h3>
                                    <li>Deadlift</li>
                                    <li>Let pull down</li>
                                    <li>Seated row</li>
                                    <li>One arm row</li>
                                    <li>Bent over</li>
                                    <li>Straight arm pull down</li>
                                    <li>Shrug</li>
                                </div>
                                <div className="col-6">
                                    <h3>LEG</h3>
                                    <li>squat</li>
                                    <li>Leg press</li>
                                    <li>Lunges</li>
                                    <li>Leg extension</li>
                                    <li>Leg curl</li>
                                    <li>Stiff leg deadlift</li>
                                    <li>Seated calf</li>
                                </div>
                                <div className="col-6">
                                    <h3>CHEST</h3>
                                    <li>Incline bench press</li>
                                    <li>Flat bench press</li>
                                    <li>Decline bench press</li>
                                    <li>Chest fly</li>
                                    <li>Pull over</li>
                                    <li>Chest press machine</li>
                                </div>
                                <div className="col-6">
                                    <h3>SHOULDER</h3>
                                    <li>BB/DB over head press</li>
                                    <li>Front raises</li>
                                    <li>Lateral raises</li>
                                    <li>Up right row</li>
                                    <li>Reverse fly</li>
                                    <li>Rope face pull</li>
                                </div>
                                <table class="table">
                                    <thead class="thead-primary">
                                        <tr class="text-center">
                                            <th colSpan={3}>ARMS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="text-center">
                                            <td>
                                                <h3><span>BB curl</span></h3>
                                            </td>
                                            <td>
                                                <h3><span>Preacher curl</span></h3>
                                            </td>
                                            <td>
                                                <h3><span>Rope pushdown</span></h3>
                                            </td>
                                        </tr>

                                        <tr class="text-center">
                                            <td>
                                                <h3><span>DB single curl</span></h3>
                                            </td>
                                            <td>
                                                <h3><span>Skull crusher</span></h3>
                                            </td>
                                            <td>
                                                <h3><span>Reverse pushdown</span></h3>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </div>
        );
    }
}

export default Advance;