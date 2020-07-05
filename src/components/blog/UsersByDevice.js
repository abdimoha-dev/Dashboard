import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "shards-react";

import Chart from "../../utils/chart";

class UsersByDevice extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartConfig = {
      type: "pie",
      data: this.props.chartData,
      options: {
        ...{
          legend: {
            position: "bottom",
            labels: {
              padding: 25,
              boxWidth: 20
            }
          },
          cutoutPercentage: 0,
          tooltips: {
            custom: false,
            mode: "index",
            position: "nearest"
          }
        },
        ...this.props.chartOptions
      }
    };

    new Chart(this.canvasRef.current, chartConfig);
  }

  render() {
    const { title } = this.props;
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="pt-0">
          <canvas
            height="260"
            ref={this.canvasRef}
            className="blog-users-by-device m-auto"
          />
        </CardBody>
        <CardFooter className="border-top">
          <Row>
            <Col>
              Add description
            </Col>
          </Row>
        </CardFooter>
      </Card>
    );
  }
}

UsersByDevice.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart config object.
   */
  chartConfig: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object,
  /**
   * The chart data.
   */
  chartData: PropTypes.object
};
//console.log(state.male);

UsersByDevice.defaultProps = {
  title: "Daily Deaths Male/Female",
  chartData: {
    datasets: [
      {
        hoverBorderColor: "#ffffff",
        data: [0, 0],
        backgroundColor: [
          "rgba(0,123,255,1)",
          "rgba(0,123,255,0.7)"
        ]
      }
    ],
    labels: ["Female", "male"]
  }
};

export default UsersByDevice;
