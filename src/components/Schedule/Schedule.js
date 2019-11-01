import React, { Component } from 'react';
import Begginner from './Begginner';
import Intermediate from './Intermediate';
import Advance from './Advance';
import Cardio from './Cardio';

class Schedule extends Component {

    render() {

        return (
            <div>


                <Begginner />


                <Intermediate />


                <Advance />


                <Cardio />


            </div>
        );
    }
}

export default Schedule;