import React, { Component } from 'react'
import axios from 'axios';
import highcharts from 'highcharts/highstock'
import PieChart from 'highcharts-react-official'
import { CanvasJS, CanvasJSChart } from '../../assets/canvasjs.react'
//var CanvasJSReact = require('./canvasjs.react');

//var CanvasJS = CanvasJSReact.CanvasJS;
//var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class MaleFemaleDeath extends Component {
    constructor() {
        super()
        this.state = {
            male: '',
            female: ''
        }
    }

    componentDidMount() {


        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'http://35.225.118.120:8080/api/29/analytics/dataValueSet.json?dimension=dx:FlLa6bYz9aH&dimension=CMrvZp5rmoC:bqoVhX2RfG4;EVYKU2fIc6G&dimension=pe:TODAY&dimension=ou:qKzosKQPl6G&displayProperty=NAME'
        axios.get(proxyurl + url, {
            auth: {
                username: 'Super',
                password: 'Bootyeater@69'
            }
        })
            .then(res => {
                const female = res.data.dataValues[0].value
                const male = res.data.dataValues[1].value




                this.setState({
                    male: male,
                    female: female
                })
            })
    }
    render() {

        return (
            <div>
               
            </div>
        );
    }
}

export default MaleFemaleDeath