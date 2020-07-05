import React, { Component } from 'react'
import axios from 'axios'
import UsersOverview from '../blog/UsersOverview'

class DaillyDeaths extends Component {
    constructor() {
        super()
        this.state = {
            title: "Daily Deaths",
            chartData: {

                labels: ["1", "2", "3", "4", "5", "6"],
                //["20200627", "20200628", "20200629", "20200630"],
                datasets: [
                    {
                        label: "Last 7 Days",
                        fill: "start",
                        data: ["0", "0", "0", "0", "0", "0", "0"]
                    }]
            },

        }
    }
    componentDidMount() {
        const dataValue = []
        const dataLabels = []
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        //COVIDHIS Dailly Deaths
        const url = 'http://35.225.118.120:8080/api/29/analytics/dataValueSet.json?dimension=dx:FlLa6bYz9aH&dimension=pe:TODAY;LAST_7_DAYS&dimension=ou:qKzosKQPl6G&displayProperty=NAME'

        axios.get(proxyurl + url, {
            auth: {
                username: 'Super',
                password: 'Abdymohammed@123'
            }
        }).then(res => {

            res.data.dataValues.map(vals => {
                dataValue.push(vals.value)
                dataLabels.push(vals.period)
            })



            this.setState(prevState => {
                // prevState.chartData.datasets[0].data = dataValue
                // prevState.chartData.labels = dataLabels
                let chartData = Object.assign({}, prevState.chartData);
                this.state.chartData.datasets[0].data = dataValue
                this.state.chartData.labels = dataLabels

            })
            console.log(this.state.chartData.datasets[0].data);

        }

        )
    }
    render() {

        return (
            <div>
                <UsersOverview chartData={this.state.chartData} title={this.state.title} />
            </div>
        )
    }
}
export default DaillyDeaths