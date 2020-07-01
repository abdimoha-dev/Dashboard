import React, { Component } from 'react'
import axios from 'axios';

class ConfirmedCases extends Component {
    constructor() {
        super()
        this.state = {
            user: {},
            allData: []
        }
    }

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'http://35.225.118.120:8080/api/29/analytics/dataValueSet.json?dimension=dx:ocBlGrHZy6Q;XX87aQO48lt&dimension=pe:TODAY&dimension=ou:qKzosKQPl6G&displayProperty=NAME'
        axios.get(proxyurl + url, {
            auth: {
                username: 'Super',
                password: 'Bootyeater@69'
            }
        })
            .then(res => {
                if (res.data.dataValues) {
                    const agg = res.data.dataValues[0].value;
                    var tracker = '';
                    //if no value found at position 2
                    if (res.data.dataValues[1]) {
                        tracker = res.data.dataValues[1].value;
                    }
                    else {
                        tracker = 0;
                    }
                    const totalRecovered = parseFloat(agg) + parseFloat(tracker);

                    this.setState({
                        allData: totalRecovered
                    })
                }
                else {
                    this.setState({
                        allData: 0
                    })
                }


            })
    }
    render() {
        return (
            <div>
                {this.state.allData}
            </div>
        )
    }
}

export default ConfirmedCases