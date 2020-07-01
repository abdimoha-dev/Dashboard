import React, { Component } from 'react'
class Forms extends Component {
    constructor() {
        super()
        this.state = {
            value: "Init Val",
            email: "enter your email",
            text: "Enter some paragraphs",
            numberOfCareer: "BBC"
        }
    }
    hanDleEmail = (event) => {
        this.setState({
            email: event.target.value,
            text: event.target.value
        })
    }
    handleSubmit = (e) => {
        alert(e.target.name)
    }
    handleChange = (e) => {
        let val = e.target.checked
        let name = e.target.name
        this.setState({
            [name]: val
        })

    }
    render() {
        return <div>
            {this.state.email}
            <form onSubmit={this.handleSubmit}>
                <label>Email
                    <input type="text" value={this.state.email} onChange={this.hanDleEmail} />
                </label>
                <textarea value={this.state.text}>
                    Hello there
                </textarea>
                <label>
                    Choose your fight {this.state.value}
                    <select defaultValue="company" name="numberOfCareer" value={this.state.numberOfCareer} onChange={this.handleChange}>
                        <option value="CovidHIS">CovidHIS</option>
                        <option value="Dash">Dashboard</option>
                        <option value="kr" >Company</option>
                    </select>
                </label>
                <label>
                    Choose File
                    <input type="file" />
                </label>
                <input type="checkbox" />
                <button name="submit" type="submit" value="Submit">submit</button>
            </form>


        </div>
    }
}

export default Forms