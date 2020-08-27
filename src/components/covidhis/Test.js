<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SubCountyConfirmed from "../components/covidhis/SubCountyConfirmed";
import ConfirmedLast7Days from "../components/covidhis/ConfirmedLast7Days";
import MaleFemaleDeath from "../components/covidhis/MaleFemaleDeath";
import DaillyDeaths from "../components/covidhis/DaillyDeaths";
import axios from 'axios'
import SmallStats from '../components/common/SmallStats';

function BlogOverview() {
    const initialValue = [{
        label: "Total Tests",
        value: null,
        percentage: "0%",
        increase: true,
        chartLabels: [null, null, null, 1],
        attrs: { md: "6", sm: "6" },
        datasets: [
            {
                label: "Today",
                fill: "start",
                borderWidth: 1.5,
                backgroundColor: "rgba(0, 184, 216, 0.1)",
                borderColor: "rgb(0, 184, 216)",
                data: [1, 2, 9, 1]
            }
        ]
    }]
    const [smallStats, setSmallStats] = useState(initialValue)
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //COVIDHIS Total Tested
    {/**
         TODO: API to include recovered, tested, deaths and confirmed cases together
        */}
    const url = 'http://35.194.15.145:8080/api/29/analytics/dataValueSet.json?dimension=dx:qjhxv6tdE7x&dimension=pe:TODAY&dimension=ou:qKzosKQPl6G&displayProperty=NAME'

    useEffect(() => {
        axios.get(proxyurl + url, {
            auth: {
                username: 'Super',
                password: 'Abdymohammed@123'
            }

        }).then(res => {
            //console.log(res.data.dataValues[0].value);
            var chartData = {
                label: "Total Tests",
                value: res.data.dataValues[0].value,
                percentage: "0%",
                increase: true,
                chartLabels: [null, null, null, 1],
                attrs: { md: "6", sm: "6" },
                datasets: [
                    {
                        label: "Today",
                        fill: "start",
                        borderWidth: 1.5,
                        backgroundColor: "rgba(0, 184, 216, 0.1)",
                        borderColor: "rgb(0, 184, 216)",
                        data: [1, 2, 9, 1]
                    }
                ]
            }
            setSmallStats(prevStats => [...prevStats, chartData]);

        })
        //console.log(smallStats);

    }, []);
    console.log(smallStats);
    return (
        <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <PageTitle title="Dashboard Overview" subtitle="Dashboard" className="text-sm-left mb-3" />
            </Row>

            {/* Small Stats Blocks */}


            <Row>
                {/* Users Overview
        
        
        

        
        */}

                <Row>

                    {smallStats.map((stats, idx) => (
                        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
                            <SmallStats
                                id={`small-stats-${idx}`}
                                variation="1"
                                chartData={stats.datasets}
                                chartLabels={stats.chartLabels}
                                label={stats.label}
                                value={stats.value}
                                percentage={stats.percentage}
                                increase={stats.increase}
                                decrease={stats.decrease}
                            />
                        </Col>
                    ))}
                </Row>



                <Col lg="6" md="12" sm="12" className="mb-4">
                    <ConfirmedLast7Days />

                </Col>
                <Col lg="6" md="12" sm="12" className="mb-4">
                    <DaillyDeaths />
                </Col>


            </Row>
            <Row>
                {/* Male Female */}
                <Col lg="6" md="6" sm="9" className="mb-4">
                    <MaleFemaleDeath />
                </Col>
                <Col lg="6" md="12" sm="12" className="mb-4">
                    <SubCountyConfirmed />
                </Col>
            </Row>
        </Container>
    )
}

export default BlogOverview
=======
import React from "react";
import d2 from "d2";
import { init } from "d2";

function Test() {
  try {
    console.log("fuck Off Bitch");
  } catch (error) {
    console.error(error);
  }
  return (
    <div>
      <p>Mohammed</p>
    </div>
  );
}
// const Test = () => {
//   const ds = init({
//     baseUrl:
//       "http://35.194.15.145:8080/api/33/analytics/dataValueSet.json?dimension=dx:qjhxv6tdE7x&dimension=pe:TODAY&dimension=ou:qKzosKQPl6G&displayProperty=NAME",
//     headers: { authorization: `Basic ${btoa("Super:Abdymohammed@123")}` },
//   }).then((d2) => {
//     console.log(d2);
//     //Your d2 is initialised and ready to use.
//   });

//   return <div> </div>;
// };

export default Test;
>>>>>>> Stashed changes
