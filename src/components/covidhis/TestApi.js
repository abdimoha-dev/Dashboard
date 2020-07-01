import React, { Component } from 'react'

class TestApi extends Component {
  constructor() {
    super()
    this.state = {
      // user: 
      allData: []
    }
  }

  componentDidMount() {

    // , {
    // method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    //   //'Authorization': "Basic base64encode(Super:Bootyeater@69)"
    //   'Authorization': 'Basic base64encode(Super:Bootyeater@69)'
    // }


    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://35.225.118.120:8080/api/dataElements.json?paging=true&fields=:all"
    var headers = new Headers();
    headers.append("Authorization", "Basic " + btoa("Super:Bootyeater@69"));

    fetch(proxyurl + url, {
      headers: headers
      // {
      //   'Content-Type': 'application/json',
      //   //'Authorization': "Basic base64encode(Super:Bootyeater@69)"
      //   //'Authorization': 'Basic base64encode(Super:Bootyeater@69)',
      //   //'Authorization': 'Basic ' + btoa("Super:Bootyeater@69")
      // }

    })
      .then(res => {
        res.text()
      })
      .then(result => {


      },

        (error) => {
          console.log('Fuck OFF ' + error);
        }
      )

  }
  render() {

    return (

      <div>

      </div>
    )
  }
}

export default TestApi