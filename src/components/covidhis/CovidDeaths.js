import React, { Component } from 'react'
import axios from 'axios';

class CovidDeaths extends Component {
    constructor() {
        super()
        this.state = {
            user: {},
            allData: []
        }
    }

    componentDidMount() {
        const proxyurl = "";
        const url = 'http://localhost:8080/api/29/analytics/dataValueSet.json?dimension=dx:FlLa6bYz9aH&dimension=pe:TODAY&dimension=ou:qKzosKQPl6G&displayProperty=NAME'
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
                else{
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

export default CovidDeaths