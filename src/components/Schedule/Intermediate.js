/**
 * Developed By: Bharat Jograna
 * Created on: 03 Nov 2019
 * Class Component: Intermediate section of schedule page
 */
import React, { Component } from 'react';
import { Collapse, Row, Col, CardBody, Card } from 'reactstrap';

class Intermediate extends Component {

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

                {/** Intermediate section of schedule page is starts from here */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-15">
                    <Card className="mb-10">
                        <a href="javascript:void(0)" onClick={this.toggle}>
                            <Row className="m-0">
                                <Col lg={1} md={1} sm={1} xs={2} className="text-dark">
                                    {<i className="zmdi zmdi-menu zmdi-hc-3x ml-10 "></i>}
                                </Col>
                                <Col lg={11} md={11} sm={11} xs={10} className="text-dark">
                                    <h1>INTERMEDIATE</h1>
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
                                    <h3>Push</h3>
                                    <li>Flat bench press</li>
                                    <li>Incline bench press</li>
                                    <li>Decline bench press</li>
                                    <li>Chest fly</li>
                                    <li>Shoulder over head press</li>
                                    <li>Lateral raises</li>
                                    <li>Rope/bar pushdown</li>
                                    <li>Reverse tri pushdown</li>
                                </div>
                                <div className="col-6">
                                    <h3>Pull</h3>
                                    <li>Let pull down</li>
                                    <li>Seated row</li>
                                    <li>One arm row</li>
                                    <li>Hyper extension</li>
                                    <li>Rear delt fly</li>
                                    <li>BB curl</li>
                                    <li>Preacher curl</li>
                                    <li>Hammer curl</li>
                                </div>
                                <table class="table">
                                    <thead class="thead-primary">
                                        <tr class="text-center">
                                            <th colSpan={3}>LEG</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="text-center">
                                            <td>
                                                <h3><span>Squat</span></h3>
                                            </td>
                                            <td>
                                                <h3><span>Lunges</span></h3>
                                            </td>
                                            <td>
                                                <h3><span>Leg press</span></h3>
                                            </td>
                                        </tr>
                                        <tr class="text-center">
                                            <td>
                                                <h3><span>Leg extension</span></h3>
                                            </td>
                                            <td>
                                                <h3><span>Leg curl</span></h3>
                                            </td>
                                            <td>
                                                <h3><span>Seated calf</span></h3>
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

export default Intermediate;