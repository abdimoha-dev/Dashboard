import React, { Component } from 'react'
import axios from 'axios';
class CovidTest extends Component {
    constructor() {
        super()
        this.state = {
            allData: [],
            percentage: 0,
            increase: false,
        }
    }

    componentDidMount() {
        try {
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            //COVIDHIS Total Tested
            const url = 'http://35.194.15.145:8080/api/29/analytics/dataValueSet.json?dimension=dx:qjhxv6tdE7x&dimension=pe:TODAY&dimension=ou:qKzosKQPl6G&displayProperty=NAME'
            axios.get(proxyurl + url, {
                auth: {
                    username: 'Super',
                    password: 'Abdymohammed@123'
                }
            })
                .then(res => {
                    if (res.data.dataValues) {
                        this.setState({
                            allData: parseFloat(res.data.dataValues[0].value)
                        })
                    }
                    else {
                        this.setState({
                            allData: 0
                        })
                    }
                })
        }
        catch (error) {
            console.log(error);
        }

    }
    render() {
        return (
            <div>
                {this.state.allData}
            </div>
        )
    }
}

export default CovidTest