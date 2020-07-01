import React, { Component } from 'react'
import Forms from './components/test/Forms'
import Test from './components/test/Test2'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Forms></Forms>
                <Test></Test>

            </React.Fragment>
            // <div className="App">
            //     <h1>Test Component</h1>
            //     <Forms/>
            // </div>
        )
    }
}
export default App