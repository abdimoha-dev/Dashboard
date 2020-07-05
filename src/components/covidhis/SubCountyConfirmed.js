import React, { Component } from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";


import axios from 'axios';

class SubCountyConfirmed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      items: []
    }
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    //COVIDHIS New Confirmed Cases By sub-county
    const url = 'http://35.225.118.120:8080/api/29/analytics/dataValueSet.json?dimension=dx:pldGAvXW7a7&dimension=pe:TODAY&dimension=ou:HEsM6W2ImQR;EcRytSSIkUq;E7tkGikenbD;aiqi2bz0IMI;lb5LzWiUX8Y;oMaQgNIs85x;SBz4c48i24Y;jOVcLeZQSsS;nCziQtZ49jj;xhVi71INcFs;TPRNJqSm4lK;YZAZ1a9MIvX&displayProperty=NAME'

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
            this.setState({
              items: res.data.dataValues
            });
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
                        <tr key={item.orgUnit}>
                          <td>{(item.orgUnit)}</td>
                          <td>{parseFloat(item.value)}</td>
                        </tr>
                      ))}

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
















// if (res.data.dataValues) {
//   const thika = []
//   const juja = []
//   const githunguri = []
//   const gatunduS = []
//   const gatunduN = []
//   const ruiru = []
//   const orgUnits = []
//   res.data.dataValues.map((dt) => {

//     orgUnits.push({"name" : 'moha'})
//     console.log(orgUnits)
//     if (dt.orgUnit === 'YZAZ1a9MIvX') {

//       thika.push(dt.value)

//     }
//     if (dt.orgUnit === 'aiqi2bz0IMI') {

//       juja.push(dt.value)

//     }
//     if (dt.orgUnit === 'E7tkGikenbD') {

//       githunguri.push(dt.value)

//     }

//     if (dt.orgUnit === 'EcRytSSIkUq') {

//       gatunduS.push(dt.value)

//     }

//     if (dt.orgUnit === 'HEsM6W2ImQR') {

//       gatunduN.push(dt.value)

//     }

//     if (dt.orgUnit === 'TPRNJqSm4lK') {

//       ruiru.push(dt.value)

//     }

//     //console.log(thika);


//   })
//   if (thika[1] = '0') {
//     thika[1] = 0
//   }
//   if (ruiru[1] = '0') {
//     ruiru[1] = 0
//   }
//   if (juja[1] = '0') {
//     juja[1] = 0
//   }
//   if (githunguri[1] = '0') {
//     githunguri[1] = 0
//   }
//   //console.log(thika)

//   const totalThika = parseFloat(thika[0]) + parseFloat(thika[1])
//   const totalJuja = parseFloat(juja[0]) + parseFloat(juja[1])
//   const totalGithunguri = parseFloat(githunguri[0]) + parseFloat(githunguri[1])
//   const totalGatunduN = parseFloat(gatunduN[0]) + parseFloat(gatunduN[1])
//   const totalRuiru = parseFloat(ruiru[0]) + parseFloat(ruiru[1])


//   this.setState({
//     thika: totalThika,
//     juja: totalJuja,
//     githunguri: totalGithunguri,
//     gatunduN: totalGatunduN,
//     ruiru: totalRuiru,

//   })


// }
// else {
//   this.setState({
//     thika: 0,
//     juja: 0,
//     githunguri: 0,
//     gatunduN: 0,
//     ruiru: 0,

//   })
// }