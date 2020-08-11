import React, { Component } from "react";
import axios from "axios";
class CovidTest extends Component {
  constructor() {
    super();
    this.state = {
      allData: [],
      percentage: 0,
      increase: false,
    };
  }

  componentDidMount() {
    // let username = "Super";
    // let password = "Abdymohammed@123";
    // let base64 = require('base-64');


    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //COVIDHIS Total Tested
    const url =
      "http://35.194.15.145:8080/api/29/analytics/dataValueSet.json?dimension=dx:qjhxv6tdE7x&dimension=pe:TODAY&dimension=ou:qKzosKQPl6G&displayProperty=NAME";
    // let headers = new Headers();
    // headers.append("Authorization", "Basic " + btoa(username + ":" + password));

    // fetch(url+proxyurl, {
    //   method='GET',
    //   headers: new Headers({
    //     "Authorization": `Basic ${base64.encode(`${username}:${password}`)}`
    //   }),
    //   // auth: {
    //   //         username: "Super",
    //   //         password: "Abdymohammed@123",
    //   // },

    //   // method: "GET",
    //   // headers: headers,

    //   // {
    //   //   'Authorization': "Basic " + btoa(username + ":" + password),
    //   //   'Access-Control-Allow-Origin': "*",
    //   // },
    // })
    axios
      .get(proxyurl + url, {
        auth: {
          username: "Super",
          password: "Abdymohammed@123",
        },
      })
      .then((res) => {
        if (res.data.dataValues) {
          //console.log(res.data.dataValues);

          this.setState({
            allData: parseFloat(res.data.dataValues[0].value),
          });
        } else {
          this.setState({
            allData: 0,
          });
        }
      });
  }
  render() {
    return <div>{this.state.allData}</div>;
  }
}

export default CovidTest;
