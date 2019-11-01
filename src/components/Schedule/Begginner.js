import React, { Component } from 'react';
import { Collapse, Row, Col, CardBody, Card } from 'reactstrap';

class Begginner extends Component {

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

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-15">
                    <Card className="mb-10">
                        <a href="javascript:void(0)" onClick={this.toggle}>
                            <Row className="m-0">
                                <Col lg={1} md={1} sm={1} xs={1} className="text-dark">
                                    {<i className="zmdi zmdi-menu zmdi-hc-3x ml-10 "></i>}
                                </Col>
                                <Col lg={11} md={11} sm={11} xs={11} className="text-dark">
                                    <h1>BEGGINNER</h1>
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
                                    <h3>Upper</h3>
                                    <li>Lat pull down</li>
                                    <li>Chest press machine</li>
                                    <li>Shoulder machine</li>
                                    <li>Lateral raises</li>
                                    <li>Bicep curl</li>
                                    <li>Tricep pussdown</li>
                                </div>

                                <div className="col-6">
                                    <h3>Upper</h3>
                                    <li>squat</li>
                                    <li>Leg extention</li>
                                    <li>Leg curl</li>
                                    <li>Leg press</li>
                                    <li>Seated calf</li>
                                </div>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>

            </div>
        );
    }
}

export default Begginner;