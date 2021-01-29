import React, { Component } from "react";
import axios from "axios";
import UsersOverview from "../blog/UsersOverview";

class ConfirmedLast7Days extends Component {
  constructor() {
    super();
    this.state = {
      title: "Daily New Cases",
      chartData: {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
          {
            label: "Last 7 Days",
            //fill: "start",
            data: ["0", "0", "0", "0", "0", "0", "0"],
            hidden: true,
          },
        ],
      },
    };
  }
  componentDidMount() {
    const dataValue = [];
    const dataLabels = [];
    const proxyurl = "";

    //COVIDHIS New Confirmed Cases last 7 Days
    const url =
      "http://localhost:8080/api/29/analytics/dataValueSet.json?dimension=dx:pldGAvXW7a7&dimension=pe:TODAY;LAST_7_DAYS&dimension=ou:qKzosKQPl6G&displayProperty=NAME";

    axios
      .get(proxyurl + url, {
        auth: {
          username: "Super",
          password: "Abdymohammed@123",
        },
      })
      .then((res) => {
        const dataValues = res.data.dataValues;
        if (Array.isArray(dataValues)) {
          res.data.dataValues.map((vals) => {
            dataValue.push(vals.value);
            dataLabels.push(vals.period);
            return vals;
          });

          this.setState((prevState) => {
            prevState.chartData.datasets[0].data = dataValue;
            //prevState.chartData.datasets[0].hidden=false
            prevState.chartData.labels = dataLabels;
          });
        } else {
          this.setState((prevState) => {
            prevState.chartData.datasets[0].data = 0;
            prevState.chartData.labels = 0;
          });
        }
      });
  }
  render() {
    return (
      <UsersOverview
        chartData={this.state.chartData}
        title={this.state.title}
      />
    );
  }
}
export default ConfirmedLast7Days;
