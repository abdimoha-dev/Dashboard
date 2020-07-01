import React, { Component } from 'react'

export default class Test2 extends Component {
    Clock=(props) =>{
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
      
      tick=()=> {
       return (
          <this.Clock date={new Date()} />
        );
      }
    render() {
        return (
            <div>
            <h1>{this.tick}</h1>
                <label>
                    React Components
                    
                    <input type="text"></input>
                </label>
            </div>
        )
    }
}
