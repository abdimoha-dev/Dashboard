import React, { Component } from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";


import axios from 'axios';

class SubCountyConfirmed extends Component {
  constructor(props) {
    super(props)
    this.state = {
        error: null,
        items: [{ dataElement: "", period: "", orgUnit: "", value: "", storedBy: "", name: "" }],
        orgNames: []
    }
}

componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const orgUnitUrl = 'http://35.194.15.145:8080/api/33/organisationUnits.json?filter=level:eq:3&fields=id,name,level,parent&paging=false'

    //COVIDHIS New Confirmed Cases By sub-county
    const url = 'http://35.194.15.145:8080/api/29/analytics/dataValueSet.json?dimension=dx:pldGAvXW7a7&dimension=pe:TODAY&dimension=ou:HEsM6W2ImQR;EcRytSSIkUq;E7tkGikenbD;aiqi2bz0IMI;lb5LzWiUX8Y;oMaQgNIs85x;SBz4c48i24Y;jOVcLeZQSsS;nCziQtZ49jj;xhVi71INcFs;TPRNJqSm4lK;YZAZ1a9MIvX&displayProperty=NAME'

    axios.get(proxyurl + url, {
        auth: {
            username: 'Super',
            password: 'Abdymohammed@123'
        }
    })
        .then(
            res => {
                if (!res.data.dataValues) {
                    this.setState({
                        items: [0]
                    })
                }
                else {
                    //get organization units
                    axios.get(proxyurl + orgUnitUrl, {
                        auth: {
                            username: 'Super',
                            password: 'Abdymohammed@123'
                        }
                    })
                        .then(response => {
                            const data = res.data.dataValues.map((ou) => {
                                const allData = []
                                response.data.organisationUnits.map(ous => {
                                    //compare orgUnit ids
                                    if (ous.id === ou.orgUnit) {
                                        //console.log(allData[ous]);
                                        allData.name = ous.name
                                        allData.value = ou.value
                                        allData.id = ous.id

                                    }
                                })
                                return allData
                          })

                            console.log(data);


                            this.setState({
                                items: data
                            });
                        })
                }
            })

    //end

}
render() {

    return (
        <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            {/* Default Light Table */}
            <Row>
                <Col>
                    <Card small className="mb-4">
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Cases By Sub-county</h6>
                        </CardHeader>

                        <CardBody className="pt-0">

                            <table className="table mb-0">
                                <thead className="bg-light">
                                    <tr>
                                        <th scope="col" className="border-0">
                                            Name
                    </th>
                                        <th scope="col" className="border-0">
                                            Total
                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.items.map(item => (
                                            // if(item.orgUnit === )
                                            <tr key={item.id}>

                                                <td>{(item.name)}</td>
                                                <td>{parseFloat(item.value)}</td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            {/* Default Dark Table */}
        </Container>
    )
}
}

export default SubCountyConfirmed
