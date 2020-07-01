import React, { Component } from 'react'
import axios from 'axios';
import UsersOverview from '../blog/UsersOverview';

class ConfirmedLast7Days extends Component {
    constructor() {
        super()
        this.state = {
            title: "Daily New Casesss",
            chartData: {

                labels: false,
                //["20200627", "20200628", "20200629", "20200630"],
                datasets: [
                    {
                        label: "Current Month",
                        fill: "start",
                        data: [0, 0]
                    }]
            },

        }
    }
    componentDidMount() {
        const dataValue = []
        const dataLabels = []
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'http://35.225.118.120:8080/api/29/analytics/dataValueSet.json?dimension=dx:pldGAvXW7a7&dimension=pe:LAST_7_DAYS&dimension=ou:qKzosKQPl6G&displayProperty=NAME'


        axios.get(proxyurl + url, {
            auth: {
                username: 'Super',
                password: 'Bootyeater@69'
            }
        }).then(res => {
            res.data.dataValues.map(vals => {
                dataValue.push(vals.value)
                dataLabels.push(vals.period)
            })

            this.setState(prevState => {
                //let chartData = Object.assign({}, prevState.chartData);
                this.state.chartData.datasets[0].data = dataValue
                this.state.chartData.labels = dataLabels


                //chartData.datasets[0].labels = dataLabels
                //console.log(chartData.labels);




            })
           console.log(this.state.chartData.labels);

        }

        )
    }
    render() {
        return (
            <UsersOverview chartData={this.state.chartData} />
        )
    }
}
export default ConfirmedLast7Days
