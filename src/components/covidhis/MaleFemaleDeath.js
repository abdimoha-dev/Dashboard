import React, { Component } from 'react'
import axios from 'axios';

import UsersByDevice from '../blog/UsersByDevice';

class MaleFemaleDeath extends Component {
    constructor() {
        super()
        this.state = {
            gender: [],
            title: "Daily Deaths Male/Female",
            chartData: {
                datasets: [
                    {
                        hoverBorderColor: "#ffffff",
                        data: [1,1],
                        backgroundColor: [
                            "rgba(0,123,255,1)",
                            "rgba(0,123,255,0.8)"
                        ]
                    }
                ],
                labels: ["Female", "Male"]
            }
        }
    }

    componentDidMount() {

        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        //COVIDHIS Deaths Male/Female
        const url = 'http://35.194.15.145:8080/api/29/analytics/dataValueSet.json?dimension=dx:FlLa6bYz9aH&dimension=CMrvZp5rmoC:bqoVhX2RfG4;EVYKU2fIc6G&dimension=pe:TODAY&dimension=ou:qKzosKQPl6G&displayProperty=NAME'
        
        axios.get(proxyurl + url, {
            auth: {
                username: 'Super',
                password: 'Abdymohammed@123'
            }
        })
            .then(res => {
                var genderData = []
                if (res.data.dataValues) {

                    const female = res.data.dataValues[0].value
                    const male = res.data.dataValues[1].value
                    genderData.push(female)
                    genderData.push(male)

                    this.setState(prevState => {
                        
                        prevState.chartData.datasets[0].data = genderData

                    })
                    
                }
                else {
                    this.setState({
                        gender: [0, 0],
                        male: 0,
                        female: 0
                    })

                }
            })
    }
    render() {

        return (
            <div>
                <UsersByDevice chartData={this.state.chartData} />
            </div>
        );
    }
}

export default MaleFemaleDeath