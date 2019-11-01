import React, { Component } from 'react';
import { Collapse, Row, Col, CardBody, Card } from 'reactstrap';

class Cardio extends Component {

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
                                    <h1>CARDIO</h1>
                                </Col>
                            </Row>
                        </a>
                    </Card>
                    <Collapse
                        isOpen={this.state.collapse}
                    >
                        <Card>
                            <CardBody className="row container ml-30">
                                <table class="table">
                                    <tbody>
                                        <tr class="text-center">
                                            <td>
                                                <h3><span>Treadmill</span></h3>
                                            </td>
                                            <td>
                                                <h3><span>Cross Trainer</span></h3>
                                            </td>
                                            <td>
                                                <h3><span>Cycle</span></h3>
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

export default Cardio;