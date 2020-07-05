import React, { Component } from 'react'
import axios from 'axios';

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            user: {},
            allData: []
        }
    }

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'http://35.225.118.120:8080/api/29/analytics/dataValueSet.json?dimension=dx:kX2J7E3H3YO;pwMpWi75Z6T;CnPsS2xE8UN&dimension=pe:LAST_7_DAYS&dimension=CMrvZp5rmoC:bqoVhX2RfG4;EVYKU2fIc6G&dimension=ou:qKzosKQPl6G;LEVEL-3&displayProperty=NAME'
        axios.get(proxyurl + url, {
            auth: {
                username: 'Super',
                password: 'Abdymohammed@123'
            }
        })
            .then(res => {
                this.setState({
                    allData: res.data.dataValues
                })
            })
    }
    render() {
        return (
            <div>
                {this.state.allData.map((row) => {
                    return <h1> DATA HERE</h1>
                })}
            </div>
        )
    }
}

export default Auth