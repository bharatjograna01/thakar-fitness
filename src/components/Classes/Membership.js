/**
 * Developed By: Bharat Jograna
 * Created on: 03 Nov 2019
 * Class Component: Membership section of classes page
 */
import React, { Component } from 'react';

class Membership extends Component {
    render() {
        return (

            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                <table class="table">
                    <thead class="thead-primary">
                        <tr class="text-center">
                            <th colSpan={2}>GYM MEMBERSHIP</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr class="text-center">

                            <td class="color-1">
                                <h3><span>1 Month</span></h3>
                            </td>
                            <td class="color-2">
                                <h3><span>₹ 800/-</span></h3>
                            </td>
                        </tr>

                        <tr class="text-center">

                            <td class="color-3">
                                <h3><span>₹ 6 Month</span></h3>
                            </td>
                            <td class="color-4">
                                <h3><span>₹ 4,000/-</span></h3>
                            </td>
                        </tr>

                        <tr class="text-center">
                            <td class="color-2">
                                <h3><span>1 Year/-</span></h3>
                            </td>
                            <td class="color-1">
                                <h3><span>₹ 8,000/-</span></h3>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        );
    }
}

export default Membership;