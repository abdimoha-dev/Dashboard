import React, { Component } from 'react'
import axios from 'axios'

class OrgUnits extends Component {
    constructor() {
        super()
        this.state = {
            orgUnitName: []
        }
    }
    componentDidMount() {
        Promise.all([
            fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent'),
            fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')])
            .then(([res1, res2]) => Promise.all(
                [res1.json(), res2.json()]
            ))
        const proxyurl = "";

        //Organization units level 3
        const url = 'http://localhost:8080/api/33/organisationUnits.json?filter=level:eq:3&fields=id,name,level,parent&paging=false'

        // axios.get(proxyurl + url, {
        //     auth: {
        //         username: 'Super',
        //         password: 'Abdymohammed@123'
        //     }
        // })
        //     .then(res => {
        //         const orgs = res.data.organisationUnits
        //         orgs.map(org => {
        //             console.log(org.name);

        //         })


        //     })
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default OrgUnits